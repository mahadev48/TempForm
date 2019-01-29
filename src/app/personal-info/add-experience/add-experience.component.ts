import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {


	title = '';
	experience = '';
	role = [];
	locationList = ['bangalore', 'chennai', 'mumbai'];
	monthList = ['jan', 'feb', 'March', 'april'];
	yearsList = ['2000','2001', '2002', '2003', '2004'];
	headline = [];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){

  }
  
}
