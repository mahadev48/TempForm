import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-licenses',
  templateUrl: './add-licenses.component.html',
  styleUrls: ['./add-licenses.component.css']
})
export class AddLicensesComponent implements OnInit {
  licenses={'name':'',
            'issue':'',
            'monthSelect':'',
            'monthSelect1':'',
            'yearSelect':'',
            'yearSelect1':'',
            'credId':'',
            'credUrl':''


  };
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    
  }

}
