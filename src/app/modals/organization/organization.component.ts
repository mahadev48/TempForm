import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrganizationService } from 'src/app/personal-info/services/organization.service';
@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  organization={ 'name':'',
  'post':'',
  'associat':'',
  'monthSelect':'',
  'monthSelect1':'',
  'yearSelect':'',
  'yearSelect1':'',
  'checkMember': false,
  'descri':''
};
      
organizationData={};
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
