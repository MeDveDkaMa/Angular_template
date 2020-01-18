import { Injectable } from '@angular/core';
import {Users} from '../../components/list-of-users/list-of-users.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const PERSON_API: string = 'http://localhost:8080/customer/GetCustomer';

@Injectable({
  providedIn: 'root'
})


export class ListOfUsersService {


  constructor(private http: HttpClient) {
  }

  getPersons(): Observable<Users[]> {
    return this.http.get<Users[]>(PERSON_API);
  }


  createPerson(person: Users): Observable<Users> {
    return this.http.post<Users>(PERSON_API, person);
  }

}
