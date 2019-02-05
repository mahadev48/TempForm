import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class PatentService {

	url: any = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  private headers = new HttpHeaders({"Content-Type": "application/json"});

 patentCreate(patentOb: Object){
  	const patent = JSON.stringify(patentOb);
  	console.log(patent);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.url + '/patent',patent, {headers:this.headers});
  }
  
}
