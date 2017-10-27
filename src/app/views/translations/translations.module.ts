import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { FeaturesComponent } from './features.component';
import { TranslationsRoutingModule } from './translations-routing.module';

@NgModule({
  imports: [
    TranslationsRoutingModule,
    ChartsModule
  ],
  declarations: [ FeaturesComponent ]
})
export class TranslationsModule { }
