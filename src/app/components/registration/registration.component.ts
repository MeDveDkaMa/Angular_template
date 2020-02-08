import { Component, OnInit } from '@angular/core';
import {Users} from '../list-of-dishes/list-of-users.interface';
import {RegistrationService} from '../../services/Registration/registration.service';
import {User} from './user';
import {role} from './role';
import {error} from 'util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: User = new User("","","","");
  role: role = new role("");
  // role:role;
  users: Users[];
  message:any;

  constructor(private service:RegistrationService,
              private router:Router) { }

  public registerNow(){

    this.service.doRegistration(this.user,this.role)
        .subscribe((data)=>{
          this.message=data;
          alert("Successfully");
          this.router.navigate(["/Login"]);
          console.log(localStorage);
        }), error =>{
      alert("Error registration");
    }
  }

  ngOnInit() {
  }

}
