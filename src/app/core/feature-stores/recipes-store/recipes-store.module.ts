import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { recipesReducer } from './reducers/recipes.reducer';
import { RecipesEffects } from './effects/recipes.effects';

@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature('recipes', recipesReducer), EffectsModule.forFeature([RecipesEffects])],
})
export class RecipesStoreModule {}
