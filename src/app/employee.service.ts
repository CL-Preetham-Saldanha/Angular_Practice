import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private _url : string='/assets/data/employees.json'
  constructor(private http : HttpClient) { }


  getEmployees(): Observable<IEmployee[]>{
   return  this.http.get<IEmployee[]>(this._url)
 

  }


}
