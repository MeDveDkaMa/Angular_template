import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users} from '../../components/list-of-users/list-of-users.interface';

const REGISTRATION_API: string = 'http://localhost:8080/client/add';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {


  constructor(private http: HttpClient) {}

  public doRegistration(user,role){
    const params = {
      username:user.username,
      adress:user.adress,
      password:user.password,
      email:user.email,
      role:role,
    };
    console.log(params);
    return this.http.post(REGISTRATION_API,params,{responseType:'text' as 'json'});

  }

  public getUsers(){
    return this.http.get("http://localhost:9090/getAllUsers");
  }

  public getUserByEmail(email){
    return this.http.get("http://localhost:9090//findUser/"+email);
  }

  public deleteUser(id){
    return this.http.delete("http://localhost:9090/cancel/"+id);
  }

}
