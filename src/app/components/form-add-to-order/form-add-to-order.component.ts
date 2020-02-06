import { Component, OnInit } from '@angular/core';
import {User} from '../registration/user';
import {role} from '../registration/role';
import {ModalService} from '../../_modal';
import {OrdersService} from '../../services/Orders/orders.service';
import {Cart} from './Cart';
import {Dish} from './Dish';
import {CartProduct} from './CartProduct';
import {stringify} from 'querystring';
import {DishInOrder} from './DishInOrder';

@Component({
  selector: 'app-form-add-to-order',
  templateUrl: './form-add-to-order.component.html',
  styleUrls: ['./form-add-to-order.component.scss']
})
export class FormAddToOrderComponent implements OnInit {

  cart: Cart;
  public id:string;


  dishToAdd: Dish = new Dish(null);
  dishinorder:DishInOrder[];
 // cartProduct: CartProduct = new CartProduct("");

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
    this.GetOrder();
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  GetOrder(){
    this.service.getOrder().subscribe((res: any)=>{
      this.dishinorder = res;
      console.log(this.dishinorder);
    });
  }
}
