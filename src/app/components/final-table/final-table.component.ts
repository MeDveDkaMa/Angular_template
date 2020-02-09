import {Component, OnInit} from '@angular/core';
import {DishInOrder} from '../form-add-to-order/DishInOrder';
import {DishService} from '../../services/Dish/dish.service';
import {OrdersService} from '../../services/Orders/orders.service';

@Component({
  selector: 'app-final-table',
  templateUrl: './final-table.component.html',
  styleUrls: ['./final-table.component.scss']
})
export class FinalTableComponent implements OnInit{

  dishInOrder:DishInOrder[];
  public id:string;

  constructor(private service: DishService,
              private OrderService:OrdersService) { }

  displayedColumns: string[] = ['item', 'cost'];

  ngOnInit(): void {
    this.ShowOrder();
  }


  GetOrder(id:string){
    this.OrderService.getOrder(id).subscribe((res: any)=>{
      this.dishInOrder = res;
      console.log(this.dishInOrder);
    });
  }

  ShowOrder() {
    this.OrderService.getCartID(localStorage.getItem("id")).subscribe((res: any)=>{
      this.id = res[0].id;
      console.log(this.id);
      this.AddDishToOrder(this.id);
    });

  }

  AddDishToOrder(id:string){
    this.GetOrder(this.id);
  }

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.dishInOrder.map(t => t.dish.price).reduce((acc, value) => acc + value, 0);
  }




}
