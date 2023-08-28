import { Component } from '@angular/core';
import { user } from 'src/app/model/users.model';
import * as UsersData from '../../../../src/app/json/users.json';
@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss']
})
export class ShowUsersComponent {
  users:user[]
  constructor(){
    // this.products = Object.values(productsData);
    this.users=Object.values(UsersData)
  }
  deleteUser(event:user){
    this.users= this.users.filter(user => user !== event)
  }
}
