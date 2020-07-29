import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MustMatch } from '../_helpers/must-match.validators';
import { UserService } from '@app/_services'; 

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
  Tokenmessage = '';
  message = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService:UserService,
    private Router:ActivatedRoute
  ) { }

  ngOnInit(): void {
  
    this.Router.paramMap.subscribe(params =>{
      console.log(params.get('id'))
    this.userService.checkPasswordToken(params.get('id')).subscribe((res)=>{
      console.log(res);
      // if(res.user_id !== null)
      // {
      //  localStorage.setItem('user_id',res.user_id);
      // }
    
    
      if(res.status == 2 )
      {
        this.router.navigate(['/login']);
      }
      if(res.status == 3)
      {
        this.Tokenmessage = 'Token do not matched'
        setTimeout(() => this.router.navigate(['/login']) , 2000) 
       
      }
    })
    
    })

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

      this.userService.changeUserPassword(this.f.password.value,this.f.confirmPassword.value).subscribe((res)=>{
              
           if(res.status == 2){


           }else{
            this.message = 'Password has been updated!'
            setTimeout(() => this.router.navigate(['/login']) , 1000)
           }

        
      })

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.resetForm.value))
  }

}
