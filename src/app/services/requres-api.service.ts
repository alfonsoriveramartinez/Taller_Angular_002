import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { publicDecrypt } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class RequresApiService {

  private body(data: any){
    return JSON.stringify(data);
  }

  private headers(){
    return {
      headers:{
        'Content-Type':'application/json'
      }
      
      // [
      //   'Content-Type','application/json'
      // ]
    }
  }

  private url(endpoint:string){
    return `https://reqres.in/api/${endpoint}`
  }
  
  constructor(private http:HttpClient) {
    
  }

  public login(user:string, password:string):Observable<any>{
    return this.http.post<any>(
      this.url('login'),
      this.body({
        email:user,
        password:password
      }),
      this.headers()
    )
  }
}
