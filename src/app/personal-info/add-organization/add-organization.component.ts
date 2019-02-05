import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrganizationService } from '../services/organization.service';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.css']
})
export class AddOrganizationComponent implements OnInit {
  
  organization = { 
                  'name':'',
                  'post':'',
                  'associat':'',
                  'monthSelect':[],
                  'monthSelect1':[],
                  'yearSelect':[],
                  'yearSelect1':[],
                  'checkMember': false,
                  'descri':''
                 };
                 
  organizationData = {};
                 
  constructor(private orgService: OrganizationService) { }

  ngOnInit() {
  }

  onSubmit(organizationForm: NgForm){
    this.organizationData = organizationForm.value;
    console.log(organizationForm.value);
    this.orgService.organizationCreate(this.organizationData).subscribe(
     res =>{
       console.log(res);
     },
     err =>{
       console.log(err);
     });
  }

}
