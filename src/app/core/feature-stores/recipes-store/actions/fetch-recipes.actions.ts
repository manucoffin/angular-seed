import { createAction, props } from '@ngrx/store';
import { RecipesActionTypes } from './recipes-action-types';
import { IRecipe } from '@app/shared/types/recipe.interface';

export const fetchOne = createAction(RecipesActionTypes.FetchOne, props<{ recipeId: string }>());

export const fetchOneSuccess = createAction(RecipesActionTypes.FetchOneSuccess, props<{ recipe: IRecipe }>());

export const fetchOneError = createAction(RecipesActionTypes.FetchOneError);

export const fetchAll = createAction(RecipesActionTypes.FetchAll);

export const fetchAllSuccess = createAction(RecipesActionTypes.FetchAllSuccess, props<{ recipes: IRecipe[] }>());

export const fetchAllError = createAction(RecipesActionTypes.FetchAllError);
