import { Component } from '@angular/core';
import  { StudyService } from './views/magazine/study.service';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>',
  providers: [StudyService]
})
export class AppComponent { }
