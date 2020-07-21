import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.less']
})
export class SucessComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

backtoLogin(){
this.router.navigate(['/login'])
}




}
