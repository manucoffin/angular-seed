import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IRecipe } from '@app/shared/types/recipe.interface';
import { StoreActionState } from '@app/shared/types/store-action-state.enum';

export interface State extends EntityState<IRecipe> {
  recipesFetching: StoreActionState;
  recipeFetching: StoreActionState;
}

export const modelsInitialState = {
  recipesFetching: StoreActionState.Default,
  recipeFetching: StoreActionState.Default,
};

export const adapter: EntityAdapter<IRecipe> = createEntityAdapter<IRecipe>();
