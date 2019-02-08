import { Component, OnInit } from '@angular/core';
import { EducationService } from '../services/education.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {

	education = {
				'school':'',
				'degree':'',
				'studyField':'',
				'grade':'',
				'activities':'',
				'fromYear':'',
				'toYears':'',
				'description':''
				};
	educationData = {};			

  	constructor(private educationService: EducationService) { }

	  ngOnInit() {

	  }

	  onSubmit(educationForm: NgForm){
	  	this.educationData = educationForm.value;
	  	console.log(educationForm);
	  	this.educationService.educationCreate(this.educationData).subscribe(
	  		res =>{
	  			console.log(res);
	  		},
	  		err =>{
	  			console.log(err);
	  		});
	  }

}
