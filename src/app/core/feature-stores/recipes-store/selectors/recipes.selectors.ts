import { adapter, State } from '../state/recipes.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const { selectAll, selectEntities, selectIds, selectTotal } = adapter.getSelectors();

const selectRecipesState = createFeatureSelector<State>('recipes');

export const selectRecipesIds = createSelector(selectRecipesState, selectIds);
export const selectRecipesEntities = createSelector(selectRecipesState, selectEntities);
export const selectAllRecipes = createSelector(selectRecipesState, selectAll);
export const selectRecipesTotal = createSelector(selectRecipesState, selectTotal);

export const selectRecipeById = createSelector(
  selectRecipesEntities,
  (recipeEntities, props) => recipeEntities[props.recipeId],
);
