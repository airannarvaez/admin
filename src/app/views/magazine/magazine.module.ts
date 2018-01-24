import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { MagazineComponent } from './magazine.component';
import { StudyComponent } from './study.component';
import { MagazineRoutingModule } from './magazine-routing.module';

@NgModule({
  imports: [
    MagazineRoutingModule,
    HttpClientModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ 
    MagazineComponent, 
    StudyComponent 
  ]
})
export class MagazineModule { }
