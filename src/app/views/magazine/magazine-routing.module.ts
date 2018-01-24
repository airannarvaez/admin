import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagazineComponent } from './magazine.component';
import { StudyComponent } from './study.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Revistas'
    },
    children: [
      {
        path: 'magazine',
        component: MagazineComponent,
        data: {
          title: 'Fuentes'
        }
      },
      {
        path: 'study',
        component: StudyComponent,
        data: {
          title: 'Estado de Estudio'
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
