import { Component, OnInit } from '@angular/core';
import {User} from '../registration/user';
import {role} from '../registration/role';
import {ModalService} from '../../_modal';
import {OrdersService} from '../../services/Orders/orders.service';
import {Cart} from './Cart';
import {Dish} from './Dish';
import {CartProduct} from './CartProduct';

@Component({
  selector: 'app-form-add-to-order',
  templateUrl: './form-add-to-order.component.html',
  styleUrls: ['./form-add-to-order.component.scss']
})
export class FormAddToOrderComponent implements OnInit {

  cart: Cart = new Cart(null);
  dishToAdd: Dish = new Dish(null);
 // cartProduct: CartProduct = new CartProduct("");

  constructor(private modalService: ModalService,
              private service:OrdersService) { }

  count:string;
  ngOnInit() {
  }


  AddToOrder() {
    let id:string;
    console.log("ADD ORDER");
    id = localStorage.getItem("id");
   // this.service.createOrder(id).subscribe((res: any)=>{});
    //console.log("ADD DISH TO ORDER");
    // console.log(this.dishtoAdd);
    // this.service.AddDishToOrder2(this.cart,this.dishToAdd,this.count).subscribe((res: any)=>{});
    this.service.AddDishToOrder(this.cart,this.count,this.dishToAdd).subscribe((res: any)=>{});


  }

  GetCardID(){

  }


  closeModal(id: string) {
    this.modalService.close(id);
  }

}
