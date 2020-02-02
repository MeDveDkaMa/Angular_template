import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableDataSource, Dishes } from './data-table-datasource';
import {ListOfUsersService} from '../../services/ListOfUsers/list-of-users.service';
import {HttpClient} from '@angular/common/http';
// import {Dishes} from '../list-of-users/Dishes';

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
  dataSource2: DataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','price','composition'];
  // displayedColumns = ['id', 'name'];

  constructor(private listOfUsersService: ListOfUsersService,) { }

  ngOnInit() {
    this.dataSource = new DataTableDataSource();
    this.listOfUsersService.getDish2().subscribe((data: Dishes[]) => {
      this.dataSource.data = data;
      console.log(data);
        },
            error => {
      console.log("error en get persons", error)});

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
