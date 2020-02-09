import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableOrderDataSource, DataTableOrderItem } from './data-table-order-datasource';
import {DishService} from '../../services/Dish/dish.service';
import {Dishes} from '../data-table/data-table-datasource';
import {OrdersService} from '../../services/Orders/orders.service';
import {DishInOrder} from '../form-add-to-order/DishInOrder';


@Component({
  selector: 'app-data-table-order',
  templateUrl: './data-table-order.component.html',
  styleUrls: ['./data-table-order.component.scss']
})
export class DataTableOrderComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<DataTableOrderItem>;
  dataSource: DataTableOrderDataSource;
  dishInOrder:DishInOrder[];

  public id:string;
  public total:number;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','price'];

  constructor(private service: DishService,
              private OrderService:OrdersService) { }

  ngOnInit() {
    this.dataSource = new DataTableOrderDataSource();
    this.ShowOrder();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  GetOrder(id:string){
    this.OrderService.getOrder(id).subscribe((res: any)=>{
      this.dishInOrder = res;
      this.dataSource.data = res;
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

}

