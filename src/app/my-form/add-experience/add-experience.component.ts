import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {

    experience={  title:'',
                  role:'',
                  location:'',
                  expMonth:'',
                  expYear:'',
                  headline:'',
                  description:''
      };

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){

  }

}
