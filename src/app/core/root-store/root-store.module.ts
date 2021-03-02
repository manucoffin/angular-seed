import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@env/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { metaReducers, reducers } from '@app/core/root-store/reducers';
import { CustomSerializer } from '@app/core/feature-stores/router-store/state/custom-route-serializer';
import { RecipesStoreModule } from '@app/core/feature-stores/recipes-store';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from '@app/entity-metadata';

@NgModule({
  declarations: [],
  imports: [
    RecipesStoreModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
    EntityDataModule.forRoot(entityConfig),
  ],
})
export class RootStoreModule {}
