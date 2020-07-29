import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkemail',
  templateUrl: './checkemail.component.html',
  styleUrls: ['./checkemail.component.less']
})
export class CheckemailComponent implements OnInit {
  email = '';
  

  constructor() { }

  ngOnInit(): void 
  {

  this.email = localStorage.getItem('email');
   
  }

  Resendemail()
  {
    

  }


}
