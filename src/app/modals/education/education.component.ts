import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { EducationService } from 'src/app/personal-info/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
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
  constructor( private educationService: EducationService) {  }

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
