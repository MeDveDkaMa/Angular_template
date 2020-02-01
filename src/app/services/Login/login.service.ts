import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Userlogin} from '../../components/login/userlogin';
import {map} from 'rxjs/operators';


const LOGIN_API: string = 'http://0.0.0.0:8080/client/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  public doLogin(email: string, password:string){
    const params = {
      email:email,
      password:password
    };
    console.log(params);
    return this.http.post(LOGIN_API,params);

  }

   doLogin2(): Observable<Userlogin[]>{
    // const params = {
    //   email:user.email,
    //   password:user.password
    // };
    // console.log(params);
    return this.http.get<Userlogin[]>(LOGIN_API);
    //console.log(Userlogin);

  }

}
