import { Component, Injectable, OnInit, VERSION } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router';
import { OppDetailsService } from 'src/app/services/opp-details.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})

// @Injectable({
//   providedIn: 'root' // just before your class
// })
export class SecondpageComponent implements OnInit {
  Id: any;
  oppDetails: any;
  typeDetails: any;
  ngVersion: string = VERSION.full;
  matVersion: string = '5.1.0';
  cartId: any;
  addressId: any;
  admin: any;
  PRODUCT_NAME:any;

  

  constructor(private service:OppDetailsService, private route:ActivatedRoute,private router: Router,public dialog : MatDialog,) { 
    this.route.queryParams.subscribe(params =>{
      if(params['Id']){
        this.Id=params['Id']
        this.displayitems(params['Id'])
      }
     (console.log(params,'ppp'))})
 }
  

  ngOnInit(): void {
    // this.link.queryParams = Object.assign(Object.assign({}, this.route.snapshot.queryParams), this.link.queryParams);
    // console.log(this.link.queryParams);
    // this.cartId = this.router.snapshot.params.cartId;
    // this.addressId = this.router.snapshot.params.addressId;
    // console.log(this.addressId, "addressId")
    // console.log(this.cartId, "cartId")
  }
  displayitems(Id:any){
    this.service.getItemDetail({ID:Id}).subscribe(res =>{
      this.typeDetails=res
      this.typeDetails.forEach((element:any) => {
        element.oppImage='assets/Images/ctscan-image-1.png'
      });
      console.log(res)
      this.admin=res
    })
      
    
  }
  preview1(ID:any){
    this.router.navigate(['/proto/details'],{queryParams:{Id:ID}})
  }
   openSignUp(data:any) {
     console.log(this.typeDetails[0].OPPORTUNITY_NAME)
    let dialogRef = this.dialog.open(SignupComponent, {
      data: { "PRODUCT_NAME": this.typeDetails[0].OPPORTUNITY_NAME ,'LOCATION':this.typeDetails[0].AREA_NAME}
      // data:('PRODUCT_NAME':this.typeDetails[0].OPPORTUNITY_NAME)
    // console.log(data)
      // hasBackdrop: false
    });
    dialogRef.afterClosed().subscribe(result => { 
    });
  }
}
