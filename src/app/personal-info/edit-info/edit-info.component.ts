import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EditFormService } from '../services/edit-form.service';
import { Observable } from 'rxjs';
import { CountriesService } from '../services/countries.service';


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


    
  ngOnInit() {
    this.getCountry();
    
  }

  createEditInfoDetails(userform: NgForm) {
    this.editData = userform.value;
    console.log(userform.value);
    this.editFormService.createEditIntro(this.editData).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );
  }

  getCountry() {
    this.country.allCountries().
      subscribe(
        data2 => {
          this.countryList = data2.Countries;
          // console.log('Data:', this.countryList);
        }
      )
  }

  onChangeCountry(countryIndex) {
    this.stateList = this.countryList[countryIndex].States;
    this.cityList = this.stateList[0].Cities;
    // console.log('stateList:', this.stateList[0].StateName);
    // console.log('cityList:', this.cityList);
    // console.log(this.user.state);

  }


  onChangeState(stateIndex) {
    this.cityList = this.stateList[stateIndex].Cities;
    // console.log('cityList:', this.cityList);

  }

  onFileChanged(fileEvent) {
    const file= fileEvent.target.files[0] ;
    // console.log(file.name)
    if(file.name.slice(-3) !='.pdf' && file.size > '1000000)')
    {
      alert('folder should be a PDF and not more then 1mb ')
    };
  }
  


}


