import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableUsersDataSource, DataTableUsersItem } from './data-table-users-datasource';
import {User} from '../registration/user';
import {role} from '../registration/role';
import {Router} from '@angular/router';
import {UserService} from '../../services/User/user.service';
import {ModalService} from '../../_modal';

@Component({
  selector: 'app-data-table-users',
  templateUrl: './data-table-users.component.html',
  styleUrls: ['./data-table-users.component.scss']
})
export class DataTableUsersComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<DataTableUsersItem>;
  dataSource: DataTableUsersDataSource;

  user: User;
  role: role;


  constructor(private service:UserService,
              private router:Router,
              private modalService: ModalService) { }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id','username','adress','email','role'];

  ngOnInit() {
    this.dataSource = new DataTableUsersDataSource();
    // this.GetUsers();
    this.service.getUsers()
        .subscribe((data)=>{
          this.dataSource.data=data;
        }, error =>{
          this.router.navigate(['/ListOfDishes']);
          alert("Error permission");

    })
  }




  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
