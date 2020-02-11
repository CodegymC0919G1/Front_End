import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Top100Service {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/top100';

  getTop100(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
