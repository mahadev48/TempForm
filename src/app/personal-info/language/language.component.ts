import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  language={lang:'',proficiency:''};
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){}
}
