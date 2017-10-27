import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewMagazineComponent } from './new-magazine.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Revistas'
    },
    children: [
      {
        path: 'new-magazine',
        component: NewMagazineComponent,
        data: {
          title: 'Nueva Revista'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MagazineRoutingModule {}
