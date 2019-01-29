import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class EditFormService {

	_editInfoUrl = "http://localhost:3000/forms";

  constructor(private http:HttpClient) { }
  private headers = new HttpHeaders({"Content-Type": "application/json"});
  getEditInfor(){
  	return this.http.get<any>(this._editInfoUrl);
  }
}
