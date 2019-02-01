import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project= { 'projectName':'',
              'startDate':'',
              'endDate':'',
              'monthSelect':'',
              'monthSelect1':'',
              'yearSelect':'',
              'yearSelect1':'',
              'dropdownToggle':'',
              'descriptionBox': ''

              


  };
  constructor() { }

  ngOnInit() {
  }

}
