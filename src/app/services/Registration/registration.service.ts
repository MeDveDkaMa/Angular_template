import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users} from '../../components/list-of-users/list-of-users.interface';

const REGISTRATION_API: string = 'http://localhost:8080/customer/add';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {


  constructor(private http: HttpClient) {}

  public doRegistration(user){
    return this.http.post(REGISTRATION_API,user,{responseType:'text' as 'json'});
    console.log(user)
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
