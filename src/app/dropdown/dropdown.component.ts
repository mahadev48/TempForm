import { Component, OnInit } from '@angular/core';
import {CountriesService} from '../countries.service';



@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  countryList:any[]=[];
  stateList :any[]=[];
  cityList :any[] = [];
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

}
