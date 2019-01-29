import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {

  user={ firstName:'',lastName:'',
        headLine:'', selectEdu:'',
        checkShow:'', country:'',
        state:'', city:'',
        industry:'',summary:'',


        
      
  
  
    
  };
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    
  }

}
