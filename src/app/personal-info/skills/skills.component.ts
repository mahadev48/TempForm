import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
	
	
  	constructor() { }
  	addSkills: '';

  ngOnInit() {
  }
  onSubmit(){
  	console.log(this.addSkills);
  }
}
