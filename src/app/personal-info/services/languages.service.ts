import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

	url: any = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  private headers = new HttpHeaders({"Content-Type": "application/json"});

	languageCreate(langObj: Object){
		const language = JSON.stringify(langObj);
	  	console.log(language);
	  	const headers = new Headers({'Content-Type': 'application/json'});
	  	return this.http.post(this.url + '/language', language, {headers:this.headers});
  	}

}
