import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { isNull } from 'lodash';

import { Configuration } from '../../../environments/environment';
import { Study } from './study';

import "rxjs/Rx";

//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do';

@Injectable()
export class StudyService {
    //private _config: Configuration;
    private WEB_API_URL : string = 'https://cors-anywhere.herokuapp.com/desarrollo.azaldu.com/api/categories/main'; //this._config.ServerWithApiUrl + 'search/categories';
    private _host: string;
    private _authToken: string;
    private _options: RequestOptions = null;
    _studies: Study[];
    
    constructor(private _httpService: Http, 
        //private _config: Configuration
        //private _localStorageService: LocalStorageService
    ) {
        this._host = 'http://desarrollo.azaldu.com'; // Your Host here, get it from a configuration file
        this._authToken = ''; // Your token here, get it from API
    }

    createAuthorizationHeader(): RequestOptions {
        // Just checking is this._options is null using lodash
        if (isNull(this._options)) {
          const headers = new Headers();
          //headers.append('Access-Control-Allow-Origin', '*');
          //headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
          headers.append('Content-Type', 'application/json; charset=utf-8');
          //headers.append('Authorization', this._authToken);
          this._options = new RequestOptions({headers: headers});//, withCredentials: true});
        }
        return this._options;
    }

    getStudies(): Observable<any[]> {
        return this._httpService
            .get(this.WEB_API_URL)
            .map((response: Response) => {
                //console.log(response.json());
                return <Study[]>response.json().data;
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

}