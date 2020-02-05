import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SessionService} from '../session.service';
import {RestService} from '../rest.service';
import {Observable} from 'rxjs';
import {Dishes} from '../../components/list-of-users/Dishes';
import {Cart} from '../../components/form-add-to-order/Cart';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  public id:string;

  cart:Cart[];
  public listNrs: Array<any> = [];
  nrs: any;

  constructor(private http: HttpClient,
              private sessionService:SessionService,
              private restService:RestService) {}

  public createOrder(id: string){
    const params = {
      id:id,
    };
    console.log(params);
    return this.restService.doCall('/orders/CreateOrder',params,"POST")
  }

  public getCartID(id: string){
    const params = {
      id:id
    };
    return this.restService.doCall('/orders/GetCartID',params,"POST")
        .pipe(
            map((res:any) => {
              res => res.id;
              return res;
            })
        );
  }


  // getCartID2(): Observable<any[]> {
  //   return this.http
  //       .get('/orders/GetCartID')
  //       .pipe(map(result=>result.Cart))
  // }

  public AddDishToOrder(Cart,DishToAdd,cout: string,){
    const params = {
      dish:
          {
            id:DishToAdd.id
          },

      count:cout,

      cart:
          {
            id:Cart
          }
    };

    console.log(params);

    return this.http.post('http://0.0.0.0:8080/orders/addToOrder',params,{responseType:'text' as 'json'});
  }

}

