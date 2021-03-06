import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {retry, catchError} from 'rxjs/operators';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(
      private http: HttpClient
  ) { }

  getSales(store_id, year, quarter): Observable<any> {
      return this.http.get(`${environment.apiUrl}/daily_revenue/sales/${store_id}/${year}/${quarter}`);
  }

  updateDay(id,merchandise,wire,delivery){
        return this.http.put(`${environment.apiUrl}/daily_revenue/update/${id}`, {merchandise,wire,delivery} );
  }

  getProjWeeklyRevQuarter(store_id, year, quarter) : Observable<any> {
       return this.http.get(`${environment.apiUrl}/weekly_projection_percent_revenue/proj_weekly_revenue_quarter/${store_id}/${year}/${quarter}`);
  }



}
