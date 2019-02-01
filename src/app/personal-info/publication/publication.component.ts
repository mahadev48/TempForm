import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

	publication = {'title':'', 
					  'publication':'', 
					  'publicationUrl':'', 
					  'description':''}
  constructor() { }

  ngOnInit() {
  }
  	onSubmit(){
  		
  	}
}
