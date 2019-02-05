import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

    course = {
              'courseName':'',
              'numberId':'',
              'associatedWith':''
              };
    courseData = {};
      
  constructor(private courseService:CourseService) { }

  ngOnInit() {
  }

  onSubmit(courseForm: NgForm) {
    this.courseData = courseForm.value;
    console.log(courseForm.value);
    this.courseService.courseCreate(this.courseData).subscribe(
     res =>{
       console.log(res);
     },
     err =>{
       console.log(err);
     });
  }

}
