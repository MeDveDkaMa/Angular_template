import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {AppComponent } from './app.component';
import {TestComponentComponent } from './components/test-component/test-component.component';
import {TestComponent2Component } from './components/test-component2/test-component2.component';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ListOfDishesComponent } from './components/list-of-dishes/list-of-dishes.component';
import {ListOfDishesService} from './services/ListOfDishes/list-of-dishes.service';
import {RegistrationComponent } from './components/registration/registration.component';
import {RegistrationService} from './services/Registration/registration.service';
import {LoginComponent } from './components/login/login.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginService} from './services/Login/login.service';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {SessionService} from './services/session.service';
import {RestService} from './services/rest.service';
import {MatTableModule } from '@angular/material/table';
import {MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule } from '@angular/material/sort';
import {DataTableComponent } from './components/data-table/data-table.component';
import {DataTablesModule} from 'angular-datatables';
import {MatButtonModule, MatCheckboxModule, MatIconModule} from '@angular/material';
import {ModalModule } from './_modal';
import {TableSelectionExample} from './components/data-table-add-to-order/table-selection-example';
import {OrdersService} from './services/Orders/orders.service';
import { FormAddToOrderComponent } from './components/form-add-to-order/form-add-to-order.component';
import { FormAddToDishComponent } from './components/form-add-to-dish/form-add-to-dish.component';
import {DishService} from './services/Dish/dish.service';
import { DataTableOrderComponent } from './components/data-table-order/data-table-order.component';
import { FinalTableComponent } from './components/final-table/final-table.component';
import { FormDeleteDishComponent } from './components/form-delete-dish/form-delete-dish.component';
import { DataTableUsersComponent } from './components/data-table-users/data-table-users.component';
import {UserService} from './services/User/user.service';
import { FormAddUserComponent } from './components/form-add-user/form-add-user.component';
import { FormDeleteUserComponent } from './components/form-delete-user/form-delete-user.component';


const appRoutes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'test',component:TestComponent2Component},
  {path: 'ListOfDishes',component:ListOfDishesComponent},
  {path: 'Registration',component:RegistrationComponent},
  {path: 'Login',component:LoginComponent},
  {path: 'Order',component:DataTableOrderComponent},
  {path: 'ListOfUsers',component:DataTableUsersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TestComponent2Component,
    ListOfDishesComponent,
    RegistrationComponent,
    LoginComponent,
    DataTableComponent,
    TableSelectionExample,
    FormAddToOrderComponent,
    FormAddToDishComponent,
    DataTableOrderComponent,
    FinalTableComponent,
    FormDeleteDishComponent,
    DataTableUsersComponent,
    FormAddUserComponent,
    FormDeleteUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    NgxWebstorageModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    DataTablesModule,
    MatIconModule,
    MatButtonModule,
    ModalModule,
    MatCheckboxModule,
  ],
  providers: [
      ListOfDishesService,
      RegistrationService,
      LoginService,
      SessionService,
      RestService,
      OrdersService,
      DishService,
      UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
