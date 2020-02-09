import { Component, OnInit } from '@angular/core';
import {ModalService} from '../../_modal';
import {OrdersService} from '../../services/Orders/orders.service';
import {Dish} from './Dish';
import {DishInOrder} from './DishInOrder';

@Component({
  selector: 'app-form-add-to-order',
  templateUrl: './form-add-to-order.component.html',
  styleUrls: ['./form-add-to-order.component.scss']
})
export class FormAddToOrderComponent implements OnInit {

  public id:string;


  dishToAdd: Dish = new Dish(null);
  dishInOrder:DishInOrder[];

  constructor(private modalService: ModalService,
              private service:OrdersService) { }

  count:string;

  ngOnInit() {
  }


  AddToOrder() {
    this.service.getCartID(localStorage.getItem("id")).subscribe((res: any)=>{
      this.id = res[0].id;
      console.log(this.id);
      this.AddDishToOrder(this.id);
      this.id = res.id;
    });

  }

  AddDishToOrder(id:string){
    this.service.AddDishToOrder(this.id,this.dishToAdd,this.count).subscribe((res: any)=>{});
    this.GetOrder(this.id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  GetOrder(id:string){
    this.service.getOrder(id).subscribe((res: any)=>{
      this.dishInOrder = res;
      console.log(this.dishInOrder);
    });
  }
}
