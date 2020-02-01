import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/Login/login.service';
import {Userlogin} from './userlogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service:LoginService) { }

  userlogin: Userlogin = new Userlogin("","",);

  message:any;

  public Login(){

    let resp=this.service.doLogin(this.userlogin);
    resp.subscribe(data => this.userlogin = data);

  }

  ngOnInit() {
  }

}
