import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LicensesService } from 'src/app/personal-info/services/licenses.service';
@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent implements OnInit {
  licenses = {'name':'',
              'issue':'',
              'monthSelect':'',
              'monthSelect1':'',
              'yearSelect':'',
              'yearSelect1':'',
              'credId':'',
              'credUrl':''
           };
  licenseData = {};  
  constructor(private licensesService:LicensesService) { }

  ngOnInit() {
  }
  onSubmit(licensesForm: NgForm){
    this.licenseData = licensesForm.value;
    console.log(licensesForm.value);
    this.licensesService.licensesCreate(this.licenseData).subscribe(
     res => {
       console.log(res);
     },
     err => {
       console.log(err);
     }); 
  }

}
