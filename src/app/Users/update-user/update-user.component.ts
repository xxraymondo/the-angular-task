import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as UsersData from '../../../../src/app/json/users.json';
import { user } from 'src/app/model/users.model';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {
  orderby!: string;
  users:user[]
user: any
  constructor(private route: ActivatedRoute) {
    this.users=Object.values(UsersData)
   }
id!:string|null
image!:string
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
   let IdNumber= parseInt(this.id!)

     this.user = this.users.find(user => user.id==IdNumber)
    this.image= this.user.image
  }
  
  addUserForm:FormGroup=new FormGroup({
    'firstName':new FormControl(null,Validators.required),
    'maidenName':new FormControl(null,Validators.required),
    'lastName':new FormControl(null,Validators.required),
    'email':new FormControl(null,Validators.required),
    'phone':new FormControl(null,Validators.required),
    'image':new FormControl()
  });
  userSubmit(addUserForm:any){
    let x = addUserForm.status
   if(x=="VALID"){
    addUserForm.value.image=this.image
    this.user=addUserForm.value
   }else{
    window.alert("Please enter valid data");
   }
  }
}
