import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '@app/_services'; 


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
    private router: Router,
    private userService:UserService ) { }

  ngOnInit(): void {

    this.forgetForm = this.formBuilder.group({
      email: ['', Validators.required]

    });


  }

  get f() { return this.forgetForm.controls }

  checkInput(input)
{
   if(input == 'email')
   {
     this.error = '';
   }   
}

  onSubmit() {

    this.submitted = true;

    if (this.forgetForm.invalid) {
      return;
    }
      this.loading = true;
      localStorage.setItem('email',this.f.email.value)
    this.userService.forgotPassword(this.f.email.value).subscribe((res)=>{
      console.log(res);
       if(res.status == 1){
         this.router.navigate(['/checkemail']);
       }
       if(res.status == 2){
         console.log(res.validationErrors.email)
         this.error = res.validationErrors.email;
         this.loading = false;
       }

    })


  }



}
