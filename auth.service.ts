import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost/backend/login.php';

  constructor(private http: HttpClient) {}

  login(mail: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, {
      mail,
      password
    });
  }
}