import { Component, Input,Output,EventEmitter } from '@angular/core';

import { product } from '../../model/products.model'
import { user } from '../../model/users.model'


@Component({
  selector: 'app-single-qoute',
  templateUrl: './single-qoute.component.html',
  styleUrls: ['./single-qoute.component.scss']
})
export class SingleQouteComponent {
@Input() ChildInputProduct!:product
@Input() ChildInputUser!:user
@Output() deleteQuoteEvent = new EventEmitter<product>();
@Output() deleteUserEvent = new EventEmitter<user>();
@Output()addUserEvent = new EventEmitter<user>();
constructor(){
}
deleteUser(){
  this.deleteUserEvent.emit(this.ChildInputUser)
}
addUser(){
  this.addUserEvent.emit(this.ChildInputUser)
}
}
