
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { ProtofolioComponent } from './protofolio/protofolio.component';
import { ProtodetailsComponent } from './protodetails/protodetails.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
// import { NgApexchartsModule } from 'ng-apexcharts';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { SidenavModule } from '../sidenav/sidenav.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule, MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';

                


@NgModule({
  declarations: [
    ProtofolioComponent,
    ProtodetailsComponent,


  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,
    PharmacyRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    NgCircleProgressModule.forRoot(),
    RouterModule,
    NgChartsModule,
    SidenavModule,
    MatCheckboxModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatRippleModule,
    MatOptionModule

    

    
  ]
})
export class PharmacyModule { }
