import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EditFormService } from '../services/edit-form.service';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {

  ediinfoForm: NgForm
  user = { firstName:'',lastName:'',
        headLine:'', selectEdu:'',
        checkShow:'', country:'',
        state:'', city:'',
        industry:'',summary:'',
  };

  educationList = ['BE', 'B.tech', 'M.tech', 'MA'];
  countryList = ['India', 'Australia', 'USA', 'UAE'];
  stateList = ['Maharashtra', 'Karnataka', 'Jharkhand' ];
  cityList = ['Mumbai', 'Bangalore', 'Ranchi'];
  industryList = ['Animation', '', ''];

  editForm = [];

  constructor(private _editFormService: EditFormService) { }

  ngOnInit() {
    this._editFormService.getEditInfor().subscribe(
      res => this.editForm = res,
      err => console.log(err)
    )
  }

  onSubmit(){
    
  }

}
