import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {AppComponent } from './app.component';
import {TestComponentComponent } from './components/test-component/test-component.component';
import {TestComponent2Component } from './components/test-component2/test-component2.component';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ListOfUsersComponent } from './components/list-of-users/list-of-users.component';
import {ListOfUsersService} from './services/ListOfUsers/list-of-users.service';
import {RegistrationComponent } from './components/registration/registration.component';
import {RegistrationService} from './services/Registration/registration.service';
import {LoginComponent } from './components/login/login.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginService} from './services/Login/login.service';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {SessionService} from './services/session.service';
import {RestService} from './services/rest.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DataTableComponent } from './components/data-table/data-table.component';
import {DataTablesModule} from 'angular-datatables';
import {MatButtonModule, MatIcon, MatIconModule} from '@angular/material';

const appRoutes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'test',component:TestComponent2Component},
  {path: 'ListUsers',component:ListOfUsersComponent},
  {path: 'Registration',component:RegistrationComponent},
  {path: 'Login',component:LoginComponent}
  // {path: 'Table',component:LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TestComponent2Component,
    ListOfUsersComponent,
    RegistrationComponent,
    LoginComponent,
    DataTableComponent,
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
    MatButtonModule
  ],
  providers: [
      ListOfUsersService,
      RegistrationService,
      LoginService,
      SessionService,
      RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
