
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Slick } from 'ngx-slickjs';
import { OppDetailsService } from 'src/app/services/opp-details.service';
import { ImageService } from '../image.service';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
config: Slick.Config = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 2,
  dots: false,
  autoplay: false,
  autoplaySpeed: 2000,
   arrows: false,
}
public opportunityData: any = [] 
typeDetails:any

  smallBusiness: any;
  mediumBusiness:any;
  microBusiness: any;
  largeBusiness: any;
  startPage: any;
  paginationLimit: any;
  startPage1: any;
  paginationLimit1: any;
  startPage2: any;
  paginationLimit2: any;

 
  changeBackgroundCounter = 0;
  images: any;
  actualImage: any;
constructor(private service: OppDetailsService, private router:Router, private route: ActivatedRoute, public dialog : MatDialog,
  private imageService: ImageService, ) { 
  this.startPage = 0;
    this.paginationLimit = 4;
    this.startPage1 = 0;
    this.paginationLimit1 = 4;
    this.startPage2 = 0;
    this.paginationLimit2 = 4;
}

  ngOnInit(): void {
  
    this.images = this.imageService.getImages();
    this.actualImage = this.images[0].image;
    setInterval(() => {
      this.changeBackgroundCounter++;
      if (this.changeBackgroundCounter > this.images.length - 1) {
        this.changeBackgroundCounter = 0;
      }
      this.actualImage = this.images[this.changeBackgroundCounter].image;
    }, 4000);
    this.getlists()
   
  }

  getlists(){
    this.service.getItem1().subscribe((res:any) => {
      this.typeDetails=res.filter((x:any)=>x.STATUS=='Active') 
       this.typeDetails.forEach((element:any) => {
         element.oppImage='assets/Images/ctscan-image-1.png'
       });
      this.microBusiness=this.typeDetails.filter((res:any) => res.OPPORTUNITY_TYPE=='Micro')
      console.log(this.microBusiness)
      this.smallBusiness=this.typeDetails.filter((res:any) => res.OPPORTUNITY_TYPE=='Small')
      console.log(this.smallBusiness)
      this.mediumBusiness=this.typeDetails.filter((res:any) => res.OPPORTUNITY_TYPE=='Medium')
      console.log(this.mediumBusiness)
      this.largeBusiness=this.typeDetails.filter((res:any) => res.OPPORTUNITY_TYPE=='Large')
      console.log(this.largeBusiness)
    })

  }
/*
  preview(ID:any){
    this.router.navigate(['invest/sec'],{queryParams:{Id:ID}})

  }
  */

  openLogin() {
    let dialogRef = this.dialog.open(LoginComponent, {
      width: '800px',
      height: '550px',
      panelClass:'background'
      // hasBackdrop: false
    });
    dialogRef.afterClosed().subscribe(result => {
     
    });
  }

 
  openSignUp() {
    let dialogRef = this.dialog.open(SignupComponent, {
      width: '800px',
      height: '550px',
      panelClass:'background',
      // hasBackdrop: false
    });
    dialogRef.afterClosed().subscribe(result => { 
     
    });
  }
  
  showMoreItems()
  {
     this.paginationLimit = Number(this.paginationLimit) + 50;        
  }
  showLessItems()
  {
    this.paginationLimit = Number(this.paginationLimit) - 50;
  }
  showMoreItems1()
  {
     this.paginationLimit1 = Number(this.paginationLimit1) + 50;        
  }
  showLessItems1()
  {
    this.paginationLimit1 = Number(this.paginationLimit1) - 50;
  }
  showMoreItems2()
  {
     this.paginationLimit2 = Number(this.paginationLimit2) + 50;        
  }
  showLessItems2()
  {
    this.paginationLimit2 = Number(this.paginationLimit2) - 50;
  }
  preview1(ID:any){
    this.router.navigate(['/invest/sec'],{queryParams:{Id:ID}})
  }
}
