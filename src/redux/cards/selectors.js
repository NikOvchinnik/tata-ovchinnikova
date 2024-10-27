import { createSelector } from '@reduxjs/toolkit';
import { selectFilters } from '../filters/selectors';

export const selectCards = state => state.cards.cards;
export const selectLoading = state => state.cards.loading;
export const selectError = state => state.cards.error;

export const selectFilteredCards = createSelector(
  [selectCards, selectFilters],
  (cards, filters) => {
    const filteredCards = cards.filter(card => {

      const matchesTitle = card.title
        .toLowerCase()
        .includes(filters.search.trim().toLowerCase());

      const matchesCategory = (() => {
        if (filters.category === 'Усі') return true;
        if (filters.category === 'Нові') return card.isNew === true;
        return card.category === filters.category;
      })();

      return matchesTitle && matchesCategory;
    });

    return filteredCards;
  }
);
