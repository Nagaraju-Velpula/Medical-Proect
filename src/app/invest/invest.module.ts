// import { SidenavComponent } from './../sidenav/sidenav.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestRoutingModule } from './invest-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgxSlickJsModule } from 'ngx-slickjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressBarModule } from "angular-progress-bar"
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { IonicModule } from '@ionic/angular';
import { ImageService } from './image.service';
import { PopupComponent } from './popup/popup.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input'
// import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';
// import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
// import {NgxMatIntlTelInputModule} from 'ngx-mat-intl-tel-input';





@NgModule({
  declarations: [
    NavbarComponent,
    SecondpageComponent,
    SignupComponent,
    LoginComponent,
    PopupComponent,

  ],
  imports: [
    // NgxMatIntlTelInputModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    InvestRoutingModule,
    MatIconModule,
    NgxSlickJsModule.forRoot(),
    ReactiveFormsModule, FormsModule,
    ProgressBarModule,
    MatProgressBarModule,
    NgxIntlTelInputModule,
    NgCircleProgressModule.forRoot(),
    IonicModule
  ],
  providers: [ImageService]
})
export class InvestModule { }
