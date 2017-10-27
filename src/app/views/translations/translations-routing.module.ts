import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeaturesComponent } from './features.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Traducciones'
    },
    children: [
      {
        path: 'features',
        component: FeaturesComponent,
        data: {
          title: 'Nombres de Features'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranslationsRoutingModule {}
