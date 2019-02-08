import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EditFormService } from '../services/edit-form.service';
import { Observable } from 'rxjs';
import { CountriesService } from '../services/countries.service';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {

  user = { 
           'firstName': '',
           'lastName': '',
           'headLine': '',
           'educationList':'',
           'country':'',
           'state':'', 
           'cities':'',
           'industry':'',
           'contactInfo': '', 
           'summary':''
        };
  countryList:any[]=[];
  stateList :any[]=[];
  cityList :any[] = [];

  editData = {};

  constructor(private editFormService: EditFormService,
              private country: CountriesService) { }

public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  ngOnInit() {
    this.getCountry();

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
        alert('File uploaded successfully');
     };

  }

  createEditInfoDetails(userform: NgForm){
    this.editData = userform.value;
    console.log(userform.value);
    this.editFormService.createEditIntro(this.editData).subscribe(
    res => {
      console.log(res)
      },
    err => console.log(err)
    );    
  }

  getCountry(){
    this.country.allCountries().
    subscribe(
      data2 => {
        this.countryList = data2.Countries;
        // console.log('Data:', this.countryList);
      }
    )
  }

  onChangeCountry(countryIndex){
    this.stateList=this.countryList[countryIndex].States;
    this.cityList=this.stateList[0].Cities;
    // console.log('stateList:', this.stateList[0].StateName);
    // console.log('cityList:', this.cityList);
    this.user.country = this.countryList[countryIndex].CountryName;
      console.log(this.user.country);
  }


  onChangeState(stateIndex){
  this.cityList=this.stateList[stateIndex].Cities;
  console.log('cityList:', this.cityList);
  this.user.state = this.stateList[stateIndex].StateName;
    console.log(this.user.state);
  }



}


