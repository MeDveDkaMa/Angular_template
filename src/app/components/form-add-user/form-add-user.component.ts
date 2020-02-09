import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/User/user.service';
import {User} from '../registration/user';
import {role} from '../registration/role';
import {ModalService} from '../../_modal';

@Component({
  selector: 'app-form-add-user',
  templateUrl: './form-add-user.component.html',
  styleUrls: ['./form-add-user.component.scss']
})
export class FormAddUserComponent implements OnInit {

  user: User = new User("","","","");
  role: role = new role("");

  constructor(private service:UserService,
              private modalService: ModalService) { }

  ngOnInit() {
  }


  addUser(){
    this.service.addUser(this.user,this.role).subscribe((data)=>{
      alert("Successfully")
    }), error =>{
      alert("Error add");
    }
  }


  closeModal(id: string) {
    this.modalService.close(id);
  }

}
