import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-volunteer-experience',
  templateUrl: './add-volunteer-experience.component.html',
  styleUrls: ['./add-volunteer-experience.component.css']
})
export class AddVolunteerExperienceComponent implements OnInit {

    experience={
      'organi':'',
      'role':'',
      'cause':'',
      'monthSelect':'',
      'monthSelect1':'',
      'yearSelect':'',
      'yearSelect1':'',
      'descri':'',
    };
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){

      }
}
