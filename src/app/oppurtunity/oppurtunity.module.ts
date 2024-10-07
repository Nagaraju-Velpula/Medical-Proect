import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OppurtunityRoutingModule } from './oppurtunity-routing.module';
import { OppDetailsComponent } from './opp-details/opp-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OppListComponent } from './opp-list/opp-list.component';
import { NgxSlickJsModule } from 'ngx-slickjs';
import { LayoutModule } from '../layout/layout.module';
import { UserlistComponent } from './userlist/userlist.component';
import { SigninComponent } from './signin/signin.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [OppDetailsComponent, OppListComponent, UserlistComponent, SigninComponent],
  imports: [
    CommonModule,
    OppurtunityRoutingModule,
    ReactiveFormsModule, FormsModule,
    NgxSlickJsModule.forRoot(),
    LayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ]
})
export class OppurtunityModule { }
