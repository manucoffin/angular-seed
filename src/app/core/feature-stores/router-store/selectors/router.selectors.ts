import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from '@app/core/feature-stores/router-store/state/custom-route-serializer';

export const selectReducerState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const getRouter = createSelector(selectReducerState, (state) => state.state);
