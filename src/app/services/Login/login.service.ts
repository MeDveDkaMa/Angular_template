import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Userlogin} from '../../components/login/userlogin';
import {map} from 'rxjs/operators';
import {SessionService} from '../session.service';
import {RestService} from '../rest.service';


const LOGIN_API: string = 'http://0.0.0.0:8080/client/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    public email:string;
    public password:string;

  constructor(private http: HttpClient,
              private sessionService:SessionService,
              private restService:RestService) {
      this.email = sessionService.getSessionParam('email');
      this.password = sessionService.getSessionParam('password');
  }


    public doLogin(email: string, password:string){
        const params = {
            email:email,
            password:password,
        };
        ///console.log(params);
        return this.restService.doCall('doLogin',params)
            .pipe(
                map((res) => {
                    this.password = res.token;
                    console.log(res.password);
                    this.email = res.email;
                    this.sessionService.setSessionParam('email', this.email);
                    this.sessionService.setSessionParam('password', this.password);
                     localStorage.setItem("token",res.password);
                     console.log(localStorage);
                    return res;
                })
            );
    }

  // public doLogin(email: string, password:string){
  //   const params = {
  //     email:email,
  //     password:password
  //   };
  //   console.log(params);
  //   return this.http.post(LOGIN_API,params)
  //       .pipe(
  //           map((res) => {
  //             this.email = res.email;
  //             this.token = res.token;
  //             this.sessionService.setSessionParam('email', this.email);
  //             this.sessionService.setSessionParam('token', this.token);
  //             return res;
  //           })
  //       );
  //
  // }






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
