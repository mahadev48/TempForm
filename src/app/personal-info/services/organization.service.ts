import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

	url: any = "http://localhost:3000";

  constructor(private http:HttpClient) { }

 private headers = new HttpHeaders({"Content-Type": "application/json"});

	organizationCreate(orgOb: Object){
		const organization = JSON.stringify(orgOb);
	  	console.log(organization);
	  	const headers = new Headers({'Content-Type': 'application/json'});
	  	return this.http.post(this.url + '/organization', organization, {headers:this.headers});
  	}
}
