import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Slick } from 'ngx-slickjs';
import { OppDetailsService } from 'src/app/services/opp-details.service';

@Component({
  selector: 'app-opp-list',
  templateUrl: './opp-list.component.html',
  styleUrls: ['./opp-list.component.css']
})
export class OppListComponent implements OnInit {

  config: Slick.Config = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000 ,
     arrows: true
  }
  public opportunityData: any = []
typeDetails:any

  smallBusiness: any;
  mediumBusiness:any;
  microBusiness: any;
  largeBusiness: any;
  constructor(private service: OppDetailsService, private router:Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.getlist()
    
  }

  

  preview(){
    this.router.navigate(['/invest/sec'],{queryParams:{Id:2}})

  }
  edit(ID:any){
    this.router.navigate(['/opp/details'],{queryParams:{Id:ID}})

  }
  
  getlist(){
    this.service.getItems().subscribe(res => {
      this.typeDetails=res
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
      console.log(res)
    })
    
  }

}
