import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ScoreService } from 'src/app/personal-info/services/score.service';
@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
	score = {
    'testName':'',
    'associatedWith':'',
    'scoreBox':'',
    'month':'',
    'year':'',
    'descriptionBox':''
   };
scoreData = {};
  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
  }
  onSubmit(scoreform: NgForm){
  	this.scoreData = scoreform.value;
  	console.log(scoreform.value);
  	this.scoreService.scoreCreate(this.scoreData).subscribe(
  	res => {
  		console.log(res);
  	},
  	err => {
  		console.log(err);
  	});
  }
}
