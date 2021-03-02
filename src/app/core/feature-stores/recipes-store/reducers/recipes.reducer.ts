import { adapter, modelsInitialState, State } from '../state/recipes.state';
import { Action, createReducer, on } from '@ngrx/store';
import * as FetchRecipesActions from '../actions/fetch-recipes.actions';
import { StoreActionState } from '@app/shared/types/store-action-state.enum';

export const initialState: State = adapter.getInitialState(modelsInitialState);

const reducer = createReducer(
  initialState,

  // Fetch ONE
  on(FetchRecipesActions.fetchOne, (state, { recipeId }) => ({
    ...state,
    recipeFetching: StoreActionState.Pending,
  })),
  on(FetchRecipesActions.fetchOneSuccess, (state, { recipe }) =>
    adapter.addOne(recipe, { ...state, recipeFetching: StoreActionState.Success }),
  ),
  on(FetchRecipesActions.fetchOneError, (state) => ({
    ...state,
    recipeFetching: StoreActionState.Error,
  })),

  // Fetch ALL
  on(FetchRecipesActions.fetchAll, (state) => ({
    ...state,
    recipesFetching: StoreActionState.Pending,
  })),
  on(FetchRecipesActions.fetchAllSuccess, (state, { recipes }) =>
    adapter.upsertMany(recipes, { ...state, recipesFetching: StoreActionState.Success }),
  ),
  on(FetchRecipesActions.fetchAllError, (state) => ({
    ...state,
    recipesFetching: StoreActionState.Error,
  })),
);

export function recipesReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
