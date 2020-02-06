import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SessionService} from '../session.service';
import {RestService} from '../rest.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient,
              private sessionService:SessionService,
              private restService:RestService) { }

  public addDish(name: string,composition: string, price: string){
    const params = {
      name: name,
      composition: composition,
      price: price
    };
    ///console.log(params);
    return this.restService.doCall('/dish/addDish',params,"POST")
        .pipe(
            map((res) => {
              return res;
            })
        );
  }
}
