import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SessionService} from '../session.service';
import {RestService} from '../rest.service';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient,
              private sessionService:SessionService,
              private restService:RestService) { }

  public createOrder(id: string){
    const params = {
      id:id,
    };
    console.log(params);
    return this.restService.doCall('/orders/CreateOrder',params,"POST")
  }



  public AddDishToOrder(Cart,cout : string, DishToAdd){
    const params = {
      dish:
          {
            id:2
          },

      count:12,

      cart:
          {
            id:577
          }
    };

    console.log(params);

    return this.http.post('http://0.0.0.0:8080/orders/addToOrder',params,{responseType:'text' as 'json'});
  }

}

