import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EditFormService } from '../services/edit-form.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {

  user = { 'firstName': '',
           'lastName': '',
           'headLine': '',
           'educationList':['BE', 'B.TECH'],
           'country':['India', 'London'],
           'state':['Karnakata', 'Paris'], 
           'cities':['Bangalore', 'milpitas'],
           'industry':['Amination'],
           'profileUrl': '', 
           'summary':'',
        };

  editData = {};

  constructor(private editFormService: EditFormService) { }

  ngOnInit() {
    
  }

  createEditInfoDetails(userform: NgForm){
    this.editData = userform.value;
    console.log(userform.value);
    this.editFormService.createEditIntro(this.editData).subscribe(
    res => {
      console.log(res)
      },
    err => console.log(err)
    );    
  }

}


