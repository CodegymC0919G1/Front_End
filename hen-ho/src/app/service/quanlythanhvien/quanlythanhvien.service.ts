import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuanlythanhvienService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/qlthanhvien';

  getAll(isVip: string): Observable<any> {
    return this.http.get(this.baseUrl + '/get/' + isVip);
  }
  getThanhVien(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }
  changeVip(obj: any): Observable<any> {
    return this.http.put(this.baseUrl + '/' + obj.idThanhVien, obj);
  }
}
