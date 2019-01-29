import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {

	schoolList = [''];
	degreeList = [''];
	studyFieldList = [''];
	gradeList = [''];
	yearList = ['2000', '2001', '2002'];
	toYear = ['2000', '2001', '2002'];

  	constructor() { }

	  ngOnInit() {

	  }

	  onSubmit(){

	  }

}
