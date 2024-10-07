import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'invest',  loadChildren: () => import('./invest/invest.module'). then(m => m.InvestModule)},
  {path:'opp',  loadChildren: () => import('./oppurtunity/oppurtunity.module'). then(m => m.OppurtunityModule)},
  {path:'proto',  loadChildren: () => import('./pharmacy/pharmacy.module'). then(m => m.PharmacyModule)},


  {path: '', pathMatch : 'full', redirectTo: 'opp/signin'},


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
