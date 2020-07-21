import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    api_url = 'https://nuflorist.com/nfadmin-dev/nuflorist-backend-dev/api';
    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }
 
    forgotPassword(email) {
        return this.http.post<any>(this.api_url + '/forgotpassword', { email });
      }
 





}