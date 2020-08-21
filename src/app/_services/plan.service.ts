import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import {  AuthenticationService } from './authentication.service';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class PlanService {
    constructor(private http: HttpClient,
                private AuthenticationService:AuthenticationService                          
        ) { }

    getAll():Observable<any>{
        return this.http.get<any>(`${environment.apiUrl}/plan/plans`)
        .pipe(
            retry(1),
            /*catchError(this.handleError)*/
        )
    }

    getByUser(userId: string):Observable<any> 
    {
        const currentUser = this.AuthenticationService.currentUserValue;
         var acess_token = currentUser.access_token
         console.log(acess_token);  
         const  params = new HttpParams()
         .set('nuflorist_user_id',userId)
         .set('accessToken',acess_token);

        return this.http.get<any>(`${environment.apiUrl}/plan/modulesbyuser/${userId}`)
        .pipe(
            retry(1),
            /*catchError(this.handleError)*/
        )
    }
    
}