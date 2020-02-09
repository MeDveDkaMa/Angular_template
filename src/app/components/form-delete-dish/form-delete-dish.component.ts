import { Component, OnInit } from '@angular/core';
import {DishService} from '../../services/Dish/dish.service';

@Component({
  selector: 'app-form-delete-dish',
  templateUrl: './form-delete-dish.component.html',
  styleUrls: ['./form-delete-dish.component.scss']
})
export class FormDeleteDishComponent implements OnInit {

  public id:string;
  constructor(private service:DishService) { }

  ngOnInit() {
  }


  DeleteOrderById() {
    this.service.deleteOrderById(this.id).subscribe((res: any) => {
    },error => {
      alert("Error permission")
        }
    );
  }

}
