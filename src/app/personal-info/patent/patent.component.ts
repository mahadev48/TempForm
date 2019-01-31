import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patent',
  templateUrl: './patent.component.html',
  styleUrls: ['./patent.component.css']
})
export class PatentComponent implements OnInit {

  patent={'patentTitle':'',
          'patentOffice':'',
        'applicationNumber':'',
        'inventorName':'',
        'descriptionBox':''};
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){}

}
