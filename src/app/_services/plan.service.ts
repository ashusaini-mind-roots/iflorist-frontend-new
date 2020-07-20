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
         .set ('acess_token',acess_token);

        return this.http.get<any>(`${environment.apiUrl}/plan/modulesbyuser/${params}`)
        .pipe(
            retry(1),
            /*catchError(this.handleError)*/
        )
    }


    

    // changeAdminStore(employee_id,store_id)
	// {
	// 	const formData = new FormData();
    //     //formData.append('image', image);
    //     //formData.append('id', id);
    //     formData.append('employee_id', employee_id);
    //     formData.append('store_id', store_id);
        
    //     let header = new HttpHeaders();

    //     header.set('Content-Type','multipart/form-data');
        
    //     return this.http.post(`${environment.apiUrl}/employee/changeAdminStore`, formData,{headers: header});
	// }

    
}