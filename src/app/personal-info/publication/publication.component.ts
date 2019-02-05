import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PublicationService } from '../services/publication.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

	publication = {
                  'title':'', 
      					  'publication':'', 
      					  'publicationUrl':'', 
      					  'description':''
                };

  publicationData = {};

  constructor(private publicationService: PublicationService) { }

  ngOnInit() {
  }

  onSubmit(ftitle: NgForm){
    this.publicationData = ftitle.value;
    console.log(ftitle.value);
    this.publicationService.publicationCreate(this.publicationData).subscribe(
      res =>{
        console.log(res);
      },
      err =>{
        console.log(err);
      });
  }

}
