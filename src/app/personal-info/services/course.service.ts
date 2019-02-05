import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

	url: any = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  private headers = new HttpHeaders({"Content-Type": "application/json"});

  courseCreate(courseOb: Object){
	const course = JSON.stringify(courseOb);
  	console.log(course);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.url + '/course',course, {headers:this.headers});
  }

}
