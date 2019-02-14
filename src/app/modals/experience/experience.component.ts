import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ExperienceService } from 'src/app/personal-info/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience = {
    'title':'',
    'role': '',
    'location':'',
    'month':'',
    'years':'',
    'headline':'',
    'description':''
    };
    
experienceData = {};
  constructor(private experienceService:ExperienceService) { }

  ngOnInit() {
  }
  onSubmit(experienceForm: NgForm){
    this.experienceData = experienceForm.value;
    console.log(experienceForm);
    this.experienceService.expCreate(this.experienceData).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      });
  }
  
}

