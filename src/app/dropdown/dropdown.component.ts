import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../personal-info/services/countries.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  countryList=[];
  stateList =[];
  cityList = [];
   currentRate = 6;
  constructor( private country : CountriesService) { }

  ngOnInit() {
   this.getCountry();

  }

  getCountry(){
    this.country.allCountries().
    subscribe(
      data2=>{
        
        this.countryList=data2.Countries;
        // console.log('Data:', this.countryList);
      }
    )
  }

  onChangeCountry(countryIndex){
    this.stateList=this.countryList[countryIndex].States;
    this.cityList=this.stateList[0].Cities;
    // console.log('stateList:', this.stateList[0]);
    console.log('cityList:', this.cityList);
  }
  onChangeState(stateIndex){

  this.cityList=this.stateList[stateIndex].Cities;
  console.log('cityList:', this.cityList);
  }

  
  uploadFile(fileEvent) {
    const file= fileEvent.target.files[0] ;
    console.log(file.type)
    if(file.name.slice(-3) !='.pdf' && file.size > '1000000)')
    {
      alert('folder should be a PDF and not more then 1mb ')
    };
  }

}
