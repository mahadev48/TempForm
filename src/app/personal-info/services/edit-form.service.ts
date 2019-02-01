import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class EditFormService {

	_editInfoUrl: any = "http://localhost:3000";

  constructor(private http:HttpClient) { }
  private headers = new HttpHeaders({"Content-Type": "application/json"});
  

  createEditIntro(editOb: Object){
  	const edit = JSON.stringify(editOb);
  	console.log(edit);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this._editInfoUrl + '/forms',edit, {headers:this.headers});
  }


}

