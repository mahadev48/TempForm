import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class HonorsService {

	url: any = "http://localhost:3000";

  constructor(private http:HttpClient) { }

private headers = new HttpHeaders({"Content-Type": "application/json"});

honorsCreate(honorObj: Object){
	const honors = JSON.stringify(honorObj);
  	console.log(honors);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.url + '/honors',honors, {headers:this.headers});
  }
	
}
