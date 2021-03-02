import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { RecipesActionTypes } from '../actions/recipes-action-types';
import { RecipesService } from '@app/shared/services/recipes.service';

@Injectable()
export class RecipesEffects {
  @Effect()
  fetchOne$ = this.actions$.pipe(
    ofType(RecipesActionTypes.FetchOne),
    switchMap((action) =>
      this.recipesService.fetchOne((action as any).recipeId).pipe(
        map((recipe) => ({
          type: RecipesActionTypes.FetchOneSuccess,
          recipe: { id: recipe.payload.id, ...recipe.payload.data() },
        })),
        catchError(() => of({ type: RecipesActionTypes.FetchOneError })),
      ),
    ),
  );

  @Effect()
  fetchAll$ = this.actions$.pipe(
    ofType(RecipesActionTypes.FetchAll),
    switchMap((action) =>
      this.recipesService.fetchAll().pipe(
        map((recipes) => ({
          type: RecipesActionTypes.FetchAllSuccess,
          recipes: recipes.map((r) => ({ id: r.payload.doc.id, ...r.payload.doc.data() })),
        })),
        catchError(() => of({ type: RecipesActionTypes.FetchAllError })),
      ),
    ),
  );

  constructor(private actions$: Actions, private recipesService: RecipesService) {}
}
