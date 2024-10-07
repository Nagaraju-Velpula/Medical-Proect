import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { LoginComponent } from './login/login.component';
 

const routes: Routes = [
  {path:'nav',component:NavbarComponent},
  {path:'sec',component:SecondpageComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestRoutingModule { }
