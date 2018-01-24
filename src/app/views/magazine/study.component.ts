import { Component, OnInit } from '@angular/core';
import { scheduleMicroTask } from '@angular/core/src/util';

import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { Study } from './study';
import { StudyService } from './study.service';

@Component({
  templateUrl: 'study.component.html'
})
export class StudyComponent implements OnInit {
  page = parseInt('1') || 0;
  loading = true;
  _study: Study[];
  message: string;
  //public reviews: any[];
  
  constructor(
    private _studyService: StudyService
    //private reviews2: any[]
  ) {
    this.message = 'mensaje';
    //private _toasterService: ToasterService,
  }

  getPosts(): void {
    this._studyService.getStudies()
    .subscribe(
      resultArray => {
        this._study = resultArray;
        console.log(this._study);
      },
      error => console.log("Error :: " + error)
    )
  }

  ngOnInit(): void {
    console.log("aca obtengo datos del backend!");
    this.getPosts();
  }

}
