import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LanguagesService } from '../services/languages.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  	language = {
  				'lang':'',
  				'proficiency':''
  				};

  	languageData = {};		

  constructor(private languageService:LanguagesService) { }

  ngOnInit() {
  }

  onSubmit(langForm: NgForm){
  	this.languageData = langForm.value;
  	console.log(langForm.value);
  	this.languageService.languageCreate(this.languageData).subscribe(
  	res => {
  		console.log(res);
  	},
  	err => {
  		console.log(err);
  	});
  }
}
