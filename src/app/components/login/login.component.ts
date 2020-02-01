import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/Login/login.service';
import {Userlogin} from './userlogin';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service:LoginService,
              private router:Router) { }

  userlogin: Userlogin = new Userlogin("","");

  message:any;

  password:string;
  email:string;


  public Login(){

      localStorage.clear();
      this.service.doLogin(this.email,this.password)
          .subscribe((res: any) => {
              if (localStorage.getItem("token")) {
                  alert(localStorage.getItem("token"));
                  alert("Successfully login");
                  this.userlogin = res;
                  this.router.navigate(['/ListUsers']);
              }},
                  error =>{
              this.router.navigate(['/Registration']);
              alert("Invalid username or password\n" + error.status + " " + error.status.text);
        });

  }



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


  ngOnInit() {
  }

}
