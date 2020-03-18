import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url:string;
  constructor(
    private _htt : HttpClient
  ){ 

  }

  names(region:string,genero:string){
    this.url = 'http://uinames.com/api/?amount=1&ext';

    if(region!==null){
      this.url += `&region=${region}`;
    }

    if(genero!==null){
      this.url += `&gender=${genero}`;
    }

    return this._htt.get(this.url);
  }


}
