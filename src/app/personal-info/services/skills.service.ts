import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  url: any = "http://localhost:3000";

  constructor(private http:HttpClient) { }
  
  private headers = new HttpHeaders({"Content-Type": "application/json"});

  skillsCreate(skillObj: Object){
  	const skills = JSON.stringify(skillObj);
  	console.log(skills);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.url + '/skill',skills, {headers:this.headers});
  }

}


