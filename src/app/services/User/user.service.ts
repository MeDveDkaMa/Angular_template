import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {RestService} from '../rest.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private restService:RestService) { }

    getUsers() {
      return this.restService.doCall('/client/GetClient',null,"GET");
    }
}
