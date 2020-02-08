import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestService} from '../rest.service';


@Injectable({
  providedIn: 'root'
})



export class ListOfDishesService {

  constructor(private http: HttpClient,
              private restService:RestService) {
  }

    public getDish(){
        return this.restService.doCall('dish/GetDish',null,'GET');
    }


}
