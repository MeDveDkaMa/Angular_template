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

const appRoutes: Routes = [
  {path: '',component:TestComponentComponent},
  {path: 'test',component:TestComponent2Component},
  {path: 'ListUsers',component:ListOfUsersComponent},
  {path: 'Registration',component:RegistrationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TestComponent2Component,
    ListOfUsersComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ListOfUsersService,
              RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
