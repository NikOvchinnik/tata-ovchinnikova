import { createSelector } from '@reduxjs/toolkit';
import { selectFilters } from '../filters/selectors';

export const selectCards = state => state.cards.cards;
export const selectLoading = state => state.cards.loading;
export const selectError = state => state.cards.error;

export const selectFilteredCampers = createSelector(
  [selectCards, selectFilters],
  (cards, filters) => {
    const filteredCards = cards.filter(card => {
      // Фільтрування по назві
      const matchesTitle = card.title
        .toLowerCase()
        .includes(filters.search.trim().toLowerCase());

      // Фільтрування по категорії
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
