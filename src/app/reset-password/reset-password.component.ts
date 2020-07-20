import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MustMatch } from '../_helpers/must-match.validators';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.less']
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
     password: ['', Validators.required],
     confirmPassword: ['', Validators.required]
    },{
      validator: MustMatch('password', 'confirmPassword')

    });
  
  }

    // convenience getter for easy access to form fields
    get f() { return this.resetForm.controls; }


    onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.resetForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.resetForm.value))
  }

}
