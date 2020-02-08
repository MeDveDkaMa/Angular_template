import { Injectable } from '@angular/core';
import {Users} from '../../components/list-of-users/list-of-users.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Dishes} from '../../components/list-of-users/Dishes';
import {RestService} from '../rest.service';

const DISH_API: string = 'http://0.0.0.0:8080/dish/GetDish';
const PERSON_API: string = 'http://localhost:8080/dish/GetDish';

@Injectable({
  providedIn: 'root'
})



export class ListOfUsersService {

  public dishes: any[];

  constructor(private http: HttpClient,
              private restService:RestService) {
  }

  getPersons(): Observable<Users[]> {
    return this.http.get<Users[]>(PERSON_API);
  }

  getDish(){
    return this.http
        .get(DISH_API)
        .pipe(map((res:any) => {
          alert("Z")
          this.dishes = res;
          console.log("Блюда загружены");
          console.log(this.dishes);
          }));

  }

  getDish2(): Observable<Dishes[]> {
    return this.http.get<Dishes[]>(DISH_API);
  }

    public getDish3(){
        const params = {
            // id:32
        };
        return this.restService.doCall('dish/GetDish',params,'GET');
    }


  createPerson(person: Users): Observable<Users> {
    return this.http.post<Users>(PERSON_API, person);
  }

}
