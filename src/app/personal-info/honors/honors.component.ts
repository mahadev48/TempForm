import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-honors',
  templateUrl: './honors.component.html',
  styleUrls: ['./honors.component.css']
})
export class HonorsComponent implements OnInit {
  honors={ 'title':'',
  'associatedId':[],
  'issuerId':'',
  'issuer':'',
  'yearSelect':[],
  'monthSelect':[],

  'descriptionBox':''
};
  constructor() {

  }

  ngOnInit() {
  }
  
  onSubmit(){

  }

}
