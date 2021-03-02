import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '@env/environment';
import { routerReducer } from '@ngrx/router-store';
import { RootStoreState } from '@app/core/root-store';
import { recipesReducer } from '@app/core/feature-stores/recipes-store';

export const reducers: ActionReducerMap<RootStoreState.State> = {
  recipes: recipesReducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer<RootStoreState.State>[] = !environment.production ? [] : [];
