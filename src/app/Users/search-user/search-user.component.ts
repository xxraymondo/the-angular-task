import { Component } from '@angular/core';
import * as userData from '../../json/users.json'
@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent {
  users =userData
  foundData!:any // ask about it why any
  foundNumberData!:any
  constructor(){

    this.users = Object.values(this.users)
  }
  sendit(bindedTwoWays:string) {
    this.foundData =this.users.find(user => user.firstName.split(" ").join("").toLowerCase() == bindedTwoWays.split(" ").join("").toLowerCase()||user.maidenName.split(" ").join("").toLowerCase() == bindedTwoWays.split(" ").join("").toLowerCase()|| user.lastName.split(" ").join("").toLowerCase() == bindedTwoWays.split(" ").join("").toLowerCase())
    // this.users.find(user => user.firstName.toLowerCase() == bindedTwoWays.toLowerCase()||user.maidenName.toLowerCase() == bindedTwoWays.toLowerCase()|| user.lastName.toLowerCase() == bindedTwoWays.toLowerCase())
    console.log(this.foundData)
  }
  number(bindedTwoWays:string) {

    console.log(bindedTwoWays)
    this.foundNumberData =   this.users.find(user => user.phone.split(" ").join("") == bindedTwoWays.split(" ").join(""))
      console.log(this.foundNumberData)
    }
}
