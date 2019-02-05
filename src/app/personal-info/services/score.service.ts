import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

	url: any = "http://localhost:3000";

  constructor(private http:HttpClient) { }

private headers = new HttpHeaders({"Content-Type": "application/json"});

	scoreCreate(scoreOb: Object){
	const score = JSON.stringify(scoreOb);
  	console.log(score);
  	const headers = new Headers({'Content-Type': 'application/json'});
  	return this.http.post(this.url + '/score', score, {headers:this.headers});
  }
}
