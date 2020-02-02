import {Component, OnInit, Output} from '@angular/core';
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

  public user: Users;
  public users: Users[];
  public dish:Dishes;
  public dishes:any;


  dtOptions: DataTables.Settings = {};
  constructor(private listOfUsersService: ListOfUsersService,
              private http: HttpClient) { }


  ngOnInit() {
   // // this.listPersons();
   //  //this.listOfUsersService.getDish2().subscribe((data: Dishes[]) => this.dishes = data, error => console.log("error en get persons", error));
   //  this.listOfUsersService.getDish2().subscribe((data: Dishes[]) => this.tabledata = data, error => console.log("error en get persons", error));
   //  this.tabledata = this.dishes;
   //  // console.log(this.data);
   //  console.log(this.dishes);
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
