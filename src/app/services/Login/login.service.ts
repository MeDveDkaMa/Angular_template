import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
        return this.restService.login('/client/login',params,"POST")
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
                    localStorage.setItem("email",res.email);
                    localStorage.setItem("id",res.id);
                    console.log(localStorage);
                    return res;
                })
            );
    }
}
