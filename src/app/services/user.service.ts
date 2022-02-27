import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrlEndPoint: string = 'users';
  baseUrl: string = environment.baseUrl;
  
  constructor(
    private httpClient: HttpClient
  ) { }

  addUsers(user: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl.concat(this.apiUrlEndPoint), user);
  }

  listAllUsers(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl.concat(this.apiUrlEndPoint));
  }

}
