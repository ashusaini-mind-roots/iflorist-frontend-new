import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CompanyService} from '../_services/company.service';
import {RouterService} from '../_services/router.service';

@Component({
  /*selector: 'app-register-general-data',*/
  templateUrl: './register-general-data.component.html',
  styleUrls: ['./register-general-data.component.less']
})
export class RegisterGeneralDataComponent implements OnInit {

  SignUpForm: FormGroup;
  returnUrl: string;
  submitted = false;
  loading : boolean = false;
  error_bool:boolean = false;
  error_msg:string;
  private data: any;
  

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private companyService:CompanyService, private routerService: RouterService) { }

  get formField() { return this.SignUpForm.controls; }

  ngOnInit() {
    
    this.SignUpForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      confirm_password:['']
    },
    {validator: this.checkPassword});

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  
  keyDownFunction(event)
	{
		if(event.keyCode == 13)
		{
			this.next();
		}
	}

  checkPassword(group: FormGroup)
  {
    let password = group.get('password').value;
    let confirm_password = group.get('confirm_password').value;

    return password === confirm_password ? null : {notSame: true}
  }

  get f() { return this.SignUpForm.controls; }


  next(){
    this.loading = true;
    this.submitted = true;

    if (this.SignUpForm.invalid) {
      this.loading = false;
      return;
    }

    this.data = {
      'email':this.formField.email.value,
    };
    
    this.companyService.existUser(this.data)
    .subscribe((data: any) =>{
      if(data.error)
      {
        this.error_bool = true
        this.loading = false;
        this.error_msg = data.error;
      }
      else{
        type type = Array <{name:string,password:any,email:any}>;
        const data: type = [
            {name:this.formField.name.value,password:this.formField.password.value,email:this.formField.email.value}
        ];
        this.routerService.setRouterData(data);
        this.router.navigate(['register-plan-data']);
      }
    },
    error => {
        console.log(error);
        this.loading = false;
        this.error_bool = true
        this.error_msg = error;
    });

    return;
  }

}
