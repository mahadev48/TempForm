import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VolunteerService } from 'src/app/personal-info/services/volunteer.service';
@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
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

  constructor(private volunteerService:VolunteerService) { }

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
