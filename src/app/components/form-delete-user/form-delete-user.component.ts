import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/User/user.service';

@Component({
  selector: 'app-form-delete-user',
  templateUrl: './form-delete-user.component.html',
  styleUrls: ['./form-delete-user.component.scss']
})
export class FormDeleteUserComponent implements OnInit {

  constructor(private service: UserService) {
  }

  public id: string;

  ngOnInit() {
  }


  DeleteUserById() {
    this.service.deleteUser(this.id).subscribe((res: any) => {
      alert("Successfully")
    },error => {
      alert("Error ")
    }
    );

  }

}
