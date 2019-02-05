import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

	url: any = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  private headers = new HttpHeaders({"Content-Type": "application/json"});

  projectCreate(projectOb: Object){
  	const project = JSON.stringify(projectOb);
  	console.log(project);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.url + '/project',project, {headers:this.headers});
  }

}
