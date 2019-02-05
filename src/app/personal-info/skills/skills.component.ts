import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
	
	
  	constructor(private skillService: SkillsService) { }

  	addSkills: '';
    skillData = {};

  ngOnInit() {
  }
  onSubmit(skillsForm: NgForm){
  	this.skillData = skillsForm.value;
    console.log(skillsForm.value);
    this.skillService.skillsCreate(this.skillData).subscribe(
      res =>{
        console.log(res);
      },
      err =>{
        console.log(err);
      });
  }
}
