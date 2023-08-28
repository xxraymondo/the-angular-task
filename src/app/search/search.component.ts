import { Component } from '@angular/core';
import * as productData from '../json/products.json'
import * as userData from '../json/users.json'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  products =productData
  users =userData
  foundData!:any // ask about it why any
  foundNumberData!:any
  constructor(){

    this.products = Object.values(this.products)
    this.users = Object.values(this.users)
  }
  sendit(bindedTwoWays:string) {
    this.foundData =  this.users.find(user => user.firstName.split(" ").join("").toLowerCase() == bindedTwoWays.split(" ").join("").toLowerCase()||user.maidenName.split(" ").join("").toLowerCase() == bindedTwoWays.split(" ").join("").toLowerCase()|| user.lastName.split(" ").join("").toLowerCase() == bindedTwoWays.split(" ").join("").toLowerCase())

    // this.foundData =  this.users.find(user => user.firstName.toLowerCase() == bindedTwoWays.toLowerCase()||user.maidenName.toLowerCase() == bindedTwoWays.toLowerCase()|| user.lastName.toLowerCase() == bindedTwoWays.toLowerCase())
    console.log(this.foundData)
  }
  number(bindedTwoWays:string) {



    this.foundNumberData =  this.users.find(user => user.phone.split(" ").join("") == bindedTwoWays.split(" ").join(""))


  }
}
