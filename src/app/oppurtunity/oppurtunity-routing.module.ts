import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OppDetailsComponent } from './opp-details/opp-details.component';
import { OppListComponent } from './opp-list/opp-list.component';
import { SigninComponent } from './signin/signin.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  
  {path:'details',component:OppDetailsComponent},
  {path:'list',component:OppListComponent},
  {path:'edit/:opportunity_name',component:OppDetailsComponent},
  {path:'userlist',component:UserlistComponent},
  {path:'signin',component:SigninComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OppurtunityRoutingModule { }
