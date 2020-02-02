import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableDataSource, Dishes } from './data-table-datasource';
import {ListOfUsersService} from '../../services/ListOfUsers/list-of-users.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Dishes>;
  dataSource: DataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','price','composition'];

  constructor(private listOfUsersService: ListOfUsersService,) { }

  ngOnInit() {
    this.dataSource = new DataTableDataSource();
    this.listOfUsersService.getDish2().subscribe((data: Dishes[]) => {
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
