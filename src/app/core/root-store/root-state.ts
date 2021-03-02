import { RouterReducerState } from '@ngrx/router-store';
import { RecipesStoreState } from '@app/core/feature-stores/recipes-store';

export interface State {
  recipes: RecipesStoreState.State;
  router: RouterReducerState<any>;
}
