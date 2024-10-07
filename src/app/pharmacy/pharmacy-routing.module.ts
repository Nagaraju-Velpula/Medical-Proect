import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtodetailsComponent } from './protodetails/protodetails.component';
import { ProtofolioComponent } from './protofolio/protofolio.component';

const routes: Routes = [
  {path:'details',component:ProtodetailsComponent},
  {path:'folio',component:ProtofolioComponent},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacyRoutingModule { }
