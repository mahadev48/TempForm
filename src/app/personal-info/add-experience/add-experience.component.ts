import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {

  experience = {
                'title':'',
                'role': '',
                'location':['bangalore', 'chennai', 'mumbai'],
                'month': ['jan', 'feb', 'March', 'april'],
                'years': ['2000','2001', '2002', '2003', '2004'],
                'headline':'',
                'description':''
                };
                
  experienceData = {};

  constructor(private experienceService: ExperienceService ) { }

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
