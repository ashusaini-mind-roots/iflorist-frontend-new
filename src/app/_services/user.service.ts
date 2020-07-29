import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import {  AuthenticationService } from './authentication.service';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient, private AuthenticationService:AuthenticationService) { }
    api_url = 'https://nuflorist.com/nfadmin-dev/nuflorist-backend-dev/api';
    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }
 
    forgotPassword(email) {
        return this.http.post<any>(this.api_url + '/forgotpassword', { email });
      }
 
      changeUserPassword(newPassword,confirmPassword) {
       var current_user = this.AuthenticationService.currentUserValue;
       var userid = current_user.userid   
        return this.http.post<any>(this.api_url + '/changeUserPassword',{newPassword,confirmPassword,userid})
      }

      checkPasswordToken( p_token){
        // console.log(token);
          return this.http.post<any>(this.api_url + '/checkPasswordToken',{ p_token})     
         
        }  


}