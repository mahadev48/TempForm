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
export class ExperienceService {

	 url: any = "http://localhost:3000";

  constructor(private http:HttpClient) { }
  private headers = new HttpHeaders({"Content-Type": "application/json"});


  expCreate(expOb: Object){
  	const exp = JSON.stringify(expOb);
  	console.log(exp);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.url + '/expForm',exp, {headers:this.headers});
  }


}
