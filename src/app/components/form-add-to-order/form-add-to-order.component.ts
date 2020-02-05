import { Component, OnInit } from '@angular/core';
import {User} from '../registration/user';
import {role} from '../registration/role';
import {ModalService} from '../../_modal';
import {OrdersService} from '../../services/Orders/orders.service';
import {Cart} from './Cart';
import {Dish} from './Dish';
import {CartProduct} from './CartProduct';
import {stringify} from 'querystring';

@Component({
  selector: 'app-form-add-to-order',
  templateUrl: './form-add-to-order.component.html',
  styleUrls: ['./form-add-to-order.component.scss']
})
export class FormAddToOrderComponent implements OnInit {

  cart: Cart;
  public id:string;


  dishToAdd: Dish = new Dish(null);
 // cartProduct: CartProduct = new CartProduct("");

  constructor(private modalService: ModalService,
              private service:OrdersService) { }

  count:string;
  ngOnInit() {
  }


  // CreateOrder(){
  //   console.log("ADD ORDER");
  //   this.service.createOrder(localStorage.getItem("id")).subscribe((res: any)=>{});
  // }


  AddToOrder() {

    this.service.getCartID(localStorage.getItem("id")).subscribe((res: any)=>{
      this.id = res[0].id;
      console.log(this.id);
      this.AddToOrder2(this.id);
      // for (let entry of this.cart) {
      //   console.log(entry); // 1, "string", false
      //   console.log(this.id); // 1, "string", false
      // }

      // console.log("CART" +this.cart);
      this.id = res.id;
      //this.AddToOrder2(this.id);
      // console.log("TTTTTTTTTTTTT" +this.id);


    });



  }

  AddToOrder2(id:string){
    this.service.AddDishToOrder(id,this.dishToAdd,this.count).subscribe((res: any)=>{});
  }

  GetCardID(){

  }


  closeModal(id: string) {
    this.modalService.close(id);
  }

}
