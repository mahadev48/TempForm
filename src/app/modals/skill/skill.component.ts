import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SkillsService } from 'src/app/personal-info/services/skills.service';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor(private skillService:SkillsService) { }
  addSkills: '';
  skillData = {};
  skill=[];
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

  // adding skilles to form 
  onKeydown(event) {
    
    if (event.key === "Enter" && event.target.value[0] != null) {
      
      this.skill.push(event.target.value);
      console.log(this.skill);
      event.target.value= null;
    }
  }
}
