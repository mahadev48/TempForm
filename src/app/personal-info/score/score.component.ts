import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
score={testName:'',associatedId:'',scoreBox:'',descriptionBox:''};
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){}
}
