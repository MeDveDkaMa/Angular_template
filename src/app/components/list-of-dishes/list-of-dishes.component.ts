import {Component, OnInit} from '@angular/core';
import {ListOfDishesService} from '../../services/ListOfDishes/list-of-dishes.service';
import {Dishes} from './Dishes';
import {ModalService} from '../../_modal';
import {OrdersService} from '../../services/Orders/orders.service';



@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-dishes.component.html',
  styleUrls: ['./list-of-dishes.component.scss']
})
export class ListOfDishesComponent implements OnInit {

  public dish: Dishes;
  public id: string;


  constructor(private listOfUsersService: ListOfDishesService,
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


    GetOrders() {

    }
}
