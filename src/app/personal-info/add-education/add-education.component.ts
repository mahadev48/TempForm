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
				'fromYear':['2000', '2001', '2002'],
				'toYears':['2000', '2001', '2002'],
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

	  onFileChanged(fileEvent) {
		const file= fileEvent.target.files[0] ;
		// console.log(file.name)
		if(file.name.slice(-3) !='.pdf' && file.size > '1000000)')
		{
		  alert('folder should be a PDF and not more then 1mb ')
		};
	  }
}
