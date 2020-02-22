import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableAllOrderDataSource, AllOrders } from './data-table-all-order-datasource';
import {OrdersService} from '../../services/Orders/orders.service';

@Component({
  selector: 'app-data-table-all-order',
  templateUrl: './data-table-all-order.component.html',
  styleUrls: ['./data-table-all-order.component.scss']
})
export class DataTableAllOrderComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<AllOrders>;
  dataSource: DataTableAllOrderDataSource;

  constructor(private service: OrdersService) { }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['idDish', 'DishName',"idCart"];

  ngOnInit() {
    this.dataSource = new DataTableAllOrderDataSource();
    this.service.getOrders().subscribe((data: AllOrders[]) => {
          this.dataSource.data = data;
          console.log(data);
        },
        error => {
          console.log("error get dishes", error)});

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
