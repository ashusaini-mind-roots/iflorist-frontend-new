import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.less']
})
export class ForgetPasswordComponent implements OnInit {
  forgetForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, ) { }

  ngOnInit(): void {

    this.forgetForm = this.formBuilder.group({
      email: ['', Validators.required]

    });

  }

  get f() { return this.forgetForm.controls }



  onSubmit() {

    this.submitted = true;
    
    if (this.forgetForm.invalid) {
      return;
    }




  }



}
