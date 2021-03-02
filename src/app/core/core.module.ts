import { NgModule } from '@angular/core';
import { RootStoreModule } from '@app/core/root-store';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, RootStoreModule],
})
export class CoreModule {}
