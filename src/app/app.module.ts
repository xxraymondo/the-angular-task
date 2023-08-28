import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QoutesComponent } from './qoutes/qoutes.component';
import { HomeComponent } from './home/home.component';
import { AllQoutesComponent } from './qoutes/all-qoutes/all-qoutes.component';
import { SingleQouteComponent } from './qoutes/single-qoute/single-qoute.component';
import { SearchComponent } from './search/search.component';
import { SearchUserComponent } from './Users/search-user/search-user.component';
import { ShowUsersComponent } from './Users/show-users/show-users.component';
import { AddUserComponent } from './Users/add-user/add-user.component';
import { UpdateUserComponent } from './Users/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    QoutesComponent,
    HomeComponent,
    SearchComponent,
    AddUserComponent,
     SearchUserComponent,
     ShowUsersComponent,
     UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
