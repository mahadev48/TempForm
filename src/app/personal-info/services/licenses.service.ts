import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class LicensesService {

	url: any = "http://localhost:3000";
	
  constructor(private http:HttpClient) { }

  private headers = new HttpHeaders({"Content-Type": "application/json"});

 licensesCreate(licenOb: Object){
  	const license = JSON.stringify(licenOb);
  	console.log(license);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.url + '/licenses',license, {headers:this.headers});
  }

}
