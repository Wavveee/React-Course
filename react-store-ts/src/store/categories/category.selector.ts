import { createSelector } from "reselect";

import { CategoriesState } from './category.reduser'

const selectCategoryReduser = (state):CategoriesState => state.categories;


export const selectCategories = createSelector(
  [selectCategoryReduser],
  (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector (
  [selectCategories],
  (categories) =>  categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
)

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReduser],
  (categoriesSlise) => categoriesSlise.isLoading
)