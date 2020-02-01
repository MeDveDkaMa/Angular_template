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

  password:string;
  email:string;

  public Login(){

    // this.service.doLogin(this.userlogin)
    //     .subscribe((data:any) => {
    //       if (data.password){
    //         localStorage.getItem(data.password);
    //         console.log(localStorage);
    //         alert("Successfully login");
    //       }
    //     });


    // this.service.doLogin(this.userlogin)
    //     .subscribe(data => {
    //       this.userlogin = data;
    //       localStorage.getItem(data.toString());
    //       console.log(localStorage);
    //       alert("Successfully login");
    //     });

    this.service.doLogin(this.email,this.password)
        .subscribe(data => {
          this.userlogin = data;
          localStorage.getItem(data.toString());
          console.log(localStorage);
          alert("Successfully login");
        });

  }

  ngOnInit() {
  }

}
