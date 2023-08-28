import { Component, Input } from '@angular/core';
import { product } from 'src/app/model/products.model';
import { user } from 'src/app/model/users.model';
import * as productsData from '../../../../src/app/json/products.json';
import * as UsersData from '../../../../src/app/json/users.json';
@Component({
  selector: 'app-all-qoutes',
  templateUrl: './all-qoutes.component.html',
  styleUrls: ['./all-qoutes.component.scss']
})
export class AllQoutesComponent {

products!:product[]
users:user[]
constructor(){
  this.users=Object.values(UsersData)
}
deleteUser(event:user){
  this.users= this.users.filter(user => user !== event)
}



}
