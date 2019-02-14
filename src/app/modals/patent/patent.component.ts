import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatentService } from 'src/app/personal-info/services/patent.service';
@Component({
  selector: 'app-patent',
  templateUrl: './patent.component.html',
  styleUrls: ['./patent.component.css']
})
export class PatentComponent implements OnInit {
  patent = {
    'patentTitle':'',
    'patentOffice':'',
    'applicationNumber':'',
    'inventorName':'',
    'patentUrl':'',
    'description':''
  };
patentData = {};
  constructor(private patentService: PatentService) { }

  ngOnInit() {
  }
  onSubmit(patentForm: NgForm){
    this.patentData = patentForm.value;
    console.log(patentForm.value);
    this.patentService.patentCreate(this.patentData).subscribe(
      res =>{
        console.log(res);
      },
      err =>{
        console.log(err);
      });

  }


}
