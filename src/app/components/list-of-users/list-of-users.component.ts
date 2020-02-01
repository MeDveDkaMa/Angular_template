import { Component, OnInit } from '@angular/core';
import {Users} from './list-of-users.interface';
import {ListOfUsersService} from '../../services/ListOfUsers/list-of-users.service';
import {HttpClient} from '@angular/common/http';
import {Dishes} from './Dishes';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss']
})
export class ListOfUsersComponent implements OnInit {

  user: Users;
  users: Users[];
  dish:Dishes;
  dishes:Dishes[];


  constructor(private listOfUsersService: ListOfUsersService,
              private http: HttpClient) { }


  ngOnInit() {
   // this.listPersons();
    this.listOfUsersService.getDish2().subscribe((data: Dishes[]) => this.dishes = data, error => console.log("error en get persons", error));
  }

  private listPersons() {
    this.listOfUsersService.getPersons().subscribe((data: Users[]) => this.users = data, error => console.log("error en get persons", error));
  }


  onAddPerson(event: Users) {
    this.listOfUsersService.createPerson(event).subscribe(
        data => {
          this.user = Object.assign({}, this.user, event);
          this.listPersons();
        }
    );
  }

}
