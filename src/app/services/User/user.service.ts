import { Injectable } from '@angular/core';
import {RestService} from '../rest.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private restService:RestService) { }

    getUsers() {
      return this.restService.doCall('/client/GetClient',null,"GET");
    }

    addUser(user,role){
      const params = {
        username:user.username,
        adress:user.adress,
        password:user.password,
        email:user.email,
        role:role,
      };
      return this.restService.doCall('/client/add',params,"POST");
    }

    deleteUser(id: string){
      const params = {
        id:id
      };
      return this.restService.doCall('/client/Delete',params,"POST");
    }


}
