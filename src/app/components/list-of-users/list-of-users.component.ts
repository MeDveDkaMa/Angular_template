import {Component, OnInit} from '@angular/core';
import {Users} from './list-of-users.interface';
import {ListOfUsersService} from '../../services/ListOfUsers/list-of-users.service';
import {Dishes} from './Dishes';
import {ModalService} from '../../_modal';
import {OrdersService} from '../../services/Orders/orders.service';



@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss']
})
export class ListOfUsersComponent implements OnInit {

  public user: Users;
  public users: Users[];
  public dish: Dishes;
  public id: string;


  constructor(private listOfUsersService: ListOfUsersService,
              private modalService: ModalService,
              private service:OrdersService) { }


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


  CreateOrder(){
    console.log("ADD ORDER");
    this.service.createOrder(localStorage.getItem("id")).subscribe((res: any)=>{});
  }



  DeleteOrderById(){
    this.service.getCartID(localStorage.getItem("id")).subscribe((res: any)=>{
      this.id = res[0].id;
      this.service.deleteOrderById(this.id).subscribe((res: any)=>{});
    });


  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
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
