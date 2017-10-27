import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { NewMagazineComponent } from './new-magazine.component';
import { MagazineRoutingModule } from './magazine-routing.module';

@NgModule({
  imports: [
    MagazineRoutingModule,
    ChartsModule
  ],
  declarations: [ NewMagazineComponent ]
})
export class MagazineModule { }
