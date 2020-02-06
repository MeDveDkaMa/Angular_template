import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DishToStock} from './DishToStock';
import {DishService} from '../../services/Dish/dish.service';

@Component({
  selector: 'app-form-add-to-dish',
  templateUrl: './form-add-to-dish.component.html',
  styleUrls: ['./form-add-to-dish.component.scss']
})
export class FormAddToDishComponent implements OnInit {

  dish: DishToStock = new DishToStock("","","");

  public name:string;
  public composition:string;
  public price:string;

  constructor(private service:DishService,
              private router:Router) { }

  public addDish(){

    this.service.addDish(this.name,this.composition,this.price).subscribe((data)=>{});
           alert("Successfully");
  }

  ngOnInit() {
  }

}
