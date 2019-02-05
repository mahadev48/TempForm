import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
	url: any = "http://localhost:3000";
  constructor(private http:HttpClient) { }
  private headers = new HttpHeaders({"Content-Type": "application/json"});

  volunteerCreate(volunteerObj: Object){
  	const volunteer = JSON.stringify(volunteerObj);
  	console.log(volunteer);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.url + '/volunteer',volunteer, {headers:this.headers});
  }
}
