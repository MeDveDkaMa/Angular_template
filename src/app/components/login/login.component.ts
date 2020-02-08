import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/Login/login.service';
import {Userlogin} from './userlogin';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service:LoginService,
              private router:Router) { }

  userLogin: Userlogin = new Userlogin("","");

  password:string;
  email:string;


  public Login(){

      localStorage.clear();
      this.service.doLogin(this.email,this.password)
          .subscribe((res: any) => {
              if (localStorage.getItem("token")) {
                  alert(localStorage.getItem("token"));
                  alert("Successfully login");
                  this.userLogin = res;
                  //this.router.navigate(['/ListOfDishes']);
              }},
                  error =>{
             // this.router.navigate(['/Registration']);
              alert("Invalid username or password\n" + error.status + " " + error.status.text);
        });
  }

    ngOnInit() {
    }

}


