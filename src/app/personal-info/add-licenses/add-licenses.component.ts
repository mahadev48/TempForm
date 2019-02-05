import { Component, OnInit } from '@angular/core';
import { LicensesService } from '../services/licenses.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-licenses',
  templateUrl: './add-licenses.component.html',
  styleUrls: ['./add-licenses.component.css']
})
export class AddLicensesComponent implements OnInit {
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

  constructor(private licensesService: LicensesService) { }

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
