import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import * as UsersData from '../../../../src/app/json/users.json';
import { user } from 'src/app/model/users.model';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  users:user[]
  constructor(){
    this.users=Object.values(UsersData)
  }

  addUserForm:FormGroup=new FormGroup({
  'firstName':new FormControl(null,Validators.required),
  'password':new FormControl(),
  'phone':new FormControl(),
});

userSubmit(addUserForm:any){
  let x = addUserForm.status
 if(x=="VALID"){
  this.users.unshift(addUserForm.value)
 }else{
  window.alert("Please enter valid data");
 }
}
userDelet(id:any){
 
  this.users= this.users.filter(user => user.id !== id)
}

}
