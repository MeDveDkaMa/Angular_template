import {SelectionModel} from '@angular/cdk/collections';
import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {DataTableDataSource} from '../data-table/data-table-datasource';
import {Dishes} from '../list-of-users/Dishes';
import {ListOfUsersService} from '../../services/ListOfUsers/list-of-users.service';
import {ModalService} from '../../_modal';
import {LoginService} from '../../services/Login/login.service';

/**
 * @title Table with selection
 */
@Component({
    selector: 'table-selection-example',
    styleUrls: ['table-selection-example.css'],
    templateUrl: 'table-selection-example.html',
})
export class TableSelectionExample implements OnInit{

    dataSource2: MatTableDataSource<Dishes>;
    selection2 = new SelectionModel<Dishes>(true, []);
    displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];

    public id:string;



    constructor(private listOfUsersService: ListOfUsersService,
                private modalService: ModalService,
                private service:LoginService) {
    }

    ngOnInit(): void {

        this.dataSource2 = new MatTableDataSource<Dishes>();
        this.listOfUsersService.getDish2().subscribe((data: Dishes[]) => {
                this.dataSource2.data = data;
                console.log(data);
            },
            error => {
                console.log("error get dishes", error)});
    }


    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {

        const numSelected = this.selection2.selected.length;
        const numSelected2 = this.selection2.selected;
        //console.log(numSelected2);
        const numRows = this.dataSource2.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection2.clear() :
            this.dataSource2.data.forEach(row => this.selection2.select(row));
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: Dishes): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection2.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
    }

    AddToOrder() {
        let id:string;
        console.log("ADD ORDER");
        id = localStorage.getItem("id");
        this.service.createOrder(id).subscribe((res: any)=>{});
        console.log("ADD DISH TO ORDER");
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }

}


/**  Copyright 2019 Google LLC. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
