import { createSelector } from '@reduxjs/toolkit';
import { selectFilters } from '../filters/selectors';

export const selectCards = state => state.cards.cards;
export const selectLoading = state => state.cards.loading;
export const selectError = state => state.cards.error;

export const selectFilteredCards = createSelector(
  [selectCards, selectFilters],
  (cards, filters) => {
    const filteredCards = cards
      .filter(card => {
        const matchesTitle = card.title
          .toLowerCase()
          .includes(filters.search.trim().toLowerCase());

        const matchesCategory = (() => {
          if (card.category === 'Наявність') return false;
          if (card.category === 'Майстер-клас') return false;
          if (filters.category === 'Усі') return true;
          if (filters.category === 'Нові') return card.isNew === true;
          return card.category === filters.category;
        })();

        return matchesTitle && matchesCategory;
      })
      .sort((a, b) => b.rating - a.rating);

    return filteredCards;
  }
);

export const selectSaleCards = createSelector([selectCards], cards =>
  cards
    .filter(card => card.category === 'Наявність')
    .sort((a, b) => b.rating - a.rating)
);

export const selectMasterCards = createSelector([selectCards], cards =>
  cards
    .filter(card => card.category === 'Майстер-клас')
    .sort((a, b) => b.rating - a.rating)
);
