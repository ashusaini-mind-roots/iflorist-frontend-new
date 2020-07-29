import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { NgZone } from '@angular/core';

import { AuthenticationService } from '@app/_services'; 

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private zone: NgZone
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/home']);
        }
    }

    ngOnInit() {
    
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
	
	keyDownFunction(event)
	{
		if(event.keyCode == 13)
		{
			this.onSubmit();
		}
    }
    
    forgetpassword(){
    this.router.navigate(['/forget-password'])
    // this.zone.run(() => this.router.navigate(['/forget-password']));
    }

    onSubmit() {
        this.submitted = true; 

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            this.loading = false;
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    if(!data.error)
                  
                    {
                        console.log(data)
                        
                        this.router.navigate([this.returnUrl]);
                        this.router.navigate(['/home']).then(()=>{window.location.reload();});
                        document.body.classList.remove('loginbody'); 
                      

                    }
                    else
                    {
                        this.error = data.error;
                        this.loading = false;
                    }
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }
}
