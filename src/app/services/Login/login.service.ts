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
    public id:string;

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
        return this.restService.doCall('/client/login',params,"POST")
            .pipe(
                map((res) => {
                    this.password = res.token;
                    console.log(res.password);
                    this.email = res.email;
                    this.id = res.id;
                    this.sessionService.setSessionParam('email', this.email);
                    this.sessionService.setSessionParam('password', this.password);
                    this.sessionService.setSessionParam('id', this.id);
                    localStorage.setItem("token",res.password);
                    localStorage.setItem("id",res.id);
                    console.log(localStorage);
                    return res;
                })
            );
    }


    public createOrder(id: string){
        const params = {
            id:id,
        };
        console.log(params);
        return this.restService.doCall('/orders/CreateOrder',params,"POST")
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
