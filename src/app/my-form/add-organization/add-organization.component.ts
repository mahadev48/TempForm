import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.css']
})
export class AddOrganizationComponent implements OnInit {

  organization={ 'name':'',
    'post':'',
    'associat':'',
    'monthSelect':[],
    'monthSelect1':[],
    'yearSelect':[],
    'yearSelect1':[],
    'checkMember':true,
    'descri':''



  };
  constructor() { }

  ngOnInit() {
  }

}
