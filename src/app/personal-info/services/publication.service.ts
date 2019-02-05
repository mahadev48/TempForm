import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

	url: any = "http://localhost:3000";

  constructor(private http:HttpClient) { }
  private headers = new HttpHeaders({"Content-Type": "application/json"});

  publicationCreate(pubObj: Object){
  	const publication = JSON.stringify(pubObj);
  	console.log(publication);
  	const headers = new Headers({'Content-Type': 'application/json'});
  	return this.http.post(this.url + '/publication', publication, {headers:this.headers});
  }

}
