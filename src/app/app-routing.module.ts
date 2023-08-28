import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllQoutesComponent } from './qoutes/all-qoutes/all-qoutes.component';
import { SearchComponent } from './search/search.component';
import { SearchUserComponent } from './Users/search-user/search-user.component';
import { AddUserComponent } from './Users/add-user/add-user.component';
import { UpdateUserComponent } from './Users/update-user/update-user.component';

const routes: Routes = [
  {path: 'qoutes', loadChildren:()=>import('./modules/qoutes/qoutes.module').then(m=>m.QoutesModule)},
  {path: 'all', component:AllQoutesComponent},
  {path: '', component:SearchComponent},
  {path: 'search-User', component:SearchUserComponent},
  {path: 'add-user2', component:AddUserComponent},
  {path: 'update-user/:id', component:UpdateUserComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
