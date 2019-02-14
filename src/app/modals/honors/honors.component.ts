import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HonorsService } from 'src/app/personal-info/services/honors.service';
@Component({
  selector: 'app-honors',
  templateUrl: './honors.component.html',
  styleUrls: ['./honors.component.css']
})
export class HonorsComponent implements OnInit {
  honors = { 
    'title':'',
    'associatedId':'',
    'issuer':'',
    'monthSelect':'',
    'yearSelect':'',
    'descriptionBox':''
  };

honorsData = {};
  constructor( private honorsService:HonorsService) { }

  ngOnInit() {
  }
  onSubmit(honorsform: NgForm){
    this.honorsData = honorsform.value;
    console.log(honorsform.value);
    this.honorsService.honorsCreate(this.honorsData).subscribe(
      res =>{
        console.log(res);
      },
      err =>{
        console.log(err);
      });
  }

}
