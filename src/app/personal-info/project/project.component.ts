import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project = { 
              'projectName':'',
              'monthSelect':'',
              'monthSelect1':'',
              'yearSelect':'',
              'yearSelect1':'',
              'creatorName':'',
              'associatedWith':'',
              'projectUrl':'',
              'descriptionBox': ''             
            };

  projectData = {};
            
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  onSubmit(projectform: NgForm) {
    this.projectData = projectform.value;
    console.log(projectform.value);
    this.projectService.projectCreate(this.projectData).subscribe(
      res =>{
        console.log(res);
      },
      err =>{
        console.log(err);
      });
  }
}
