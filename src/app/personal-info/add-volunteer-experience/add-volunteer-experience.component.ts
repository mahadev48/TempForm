import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VolunteerService } from '../services/volunteer.service';

@Component({
  selector: 'app-add-volunteer-experience',
  templateUrl: './add-volunteer-experience.component.html',
  styleUrls: ['./add-volunteer-experience.component.css']
})
export class AddVolunteerExperienceComponent implements OnInit {

    experience = {
                  'organi':'',
                  'role':'',
                  'cause':'',
                  'monthSelect':'',
                  'monthSelect1':'',
                  'yearSelect':'',
                  'yearSelect1':'',
                  'descri':'',
                };

    volunteerData = {}; 

  constructor(private volunteerService: VolunteerService) { }

  ngOnInit() {
  }

  onSubmit(experiencForm: NgForm){
    this.volunteerData = experiencForm.value;
    console.log(experiencForm.value);
    this.volunteerService.volunteerCreate(this.volunteerData).subscribe(
      res =>{
        console.log(res);
      },
      err =>{
        console.log(err);
      });
    }

}
