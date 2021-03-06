import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EditFormService } from 'src/app/personal-info/services/edit-form.service';
import { CountriesService } from 'src/app/personal-info/services/countries.service';


const URL = 'http://localhost:3000/api/upload';
@Component({
  selector: 'app-editinfo',
  templateUrl: './editinfo.component.html',
  styleUrls: ['./editinfo.component.css']
})
export class EditinfoComponent implements OnInit {
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
  constructor(private editFormService:EditFormService,
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
  }


  onChangeState(stateIndex) {
    this.cityList = this.stateList[stateIndex].Cities;
    

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
