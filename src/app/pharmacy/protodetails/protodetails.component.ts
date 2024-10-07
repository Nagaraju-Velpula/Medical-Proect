import { Component, ElementRef, Inject, OnInit, VERSION, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Slick } from 'ngx-slickjs';
import { OppDetailsService } from 'src/app/services/opp-details.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatSidenavModule } from '@angular/material/sidenav';
import 'chartjs-plugin-annotation';
import { INT_TYPE } from '@angular/compiler/src/output/output_ast';
import { Chart, registerables } from 'chart.js';


@Component({
  selector: 'app-protodetails',
  templateUrl: './protodetails.component.html',
  styleUrls: ['./protodetails.component.css']
})
export class ProtodetailsComponent implements OnInit {

  // public mbarChartLabels:string[] = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
  // public barChartType:string = 'bar';
  // public barChartLegend:boolean = true;


  // public barChartData:any[] = [
  //   {data: [55, 60, 75, 82, 56, 62, 80], label: 'Company A'},
  //   {data: [58, 55, 60, 79, 66, 57, 90], label: 'Company B'}
  // ];



  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartType = 'bar';
  public barChartLegend = true;



  @ViewChild('myCanvas')
  public canvas: any;
  public context: any;
  public chartType: string = 'line';
  public chartData: any;
  public chartLabels: any;
  public chartColors: any;
  public chartOptions: any;
  opportunity_id:any;
  Id: any;
  oppDetails: any;
  public opportunityData: any = []
  typeDetails: any;

  ngVersion: string = VERSION.full;
  matVersion: string = '5.1.0';

  userdetails: any;
  typeDetails1: any;
  typeDetails2: any;
  typeDetails3: any;
  typeDetails4: any;
  typeDetails5: any;
  typeDetails6: any;
  chart1: any;
  chart2: any;
  chart3: any;
  barChartLabels: any;
  result: any;
  public crudData: any=[];
  public crudData1: any=[];
  public crudData2: any=[];
  public crudData3: any=[];


  revenues: any;
  chart: any = [];
  REVENUE: any;
  PROFIT_LOSS: any;
  data2: any
  expenses: any;
  array: any;
  userdetaisone: any;
  userdetaissecond: any;
  months: any;



  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private service: OppDetailsService,) {

    Chart.register(...registerables);
  }
  ngOnInit(): void {


    // this.chartData = [{
    //   data: [this.revenues],
    //   label: 'Anthracnose',
    //   fill: false
    // }];
    // this.chartLabels = [this.months];
    // this.chartColors = [{
    //   backgroundColor: 'rgba(0, 0, 0, 0.2)',
    //      borderColor: 'rgba(0, 0, 0, 1)'
    // }];


    this.userdetails = JSON.parse(sessionStorage.getItem('userdetails') || '{}')
    console.log(this.userdetails.opportunity_id,this.userdetails)


    this.displayitems()
    this.displayitems1()
    this.displayitems2()
    this.displayitems3()
    this.displayitems4()
    // this.displayitems5()
    // this.displayitems6()
    this.displayitems7()
    // this.displayitems8()
    this.displayitems9()
    this.displayitems10()
    this.displayitems11()
    this.displayitems12()

  }


  displayitems() {
    const obj = { user_id: this.userdetails.user_id }
    this.service.getInvested(obj).subscribe(res => {
      this.typeDetails = res
      console.log(res)
    })
  }
  displayitems1() {
    const obj1 = { user_id: this.userdetails.user_id }
    this.service.getadd(obj1).subscribe(res => {
      this.typeDetails1 = res
      console.log(res)
    })
  }
  displayitems2() {
    const obj2 = { user_id: this.userdetails.user_id }
    this.service.getadd1(obj2).subscribe(res => {
      this.typeDetails2 = res
      console.log(res)
    })
  }

  displayitems3() {
    const obj2 = { user_id: this.userdetails.user_id }
    this.service.getrev(obj2).subscribe(res => {
      this.typeDetails3 = res
      console.log(res)
    })
  }

  displayitems4() {
    const obj2 = { PATIENT_ID: this.userdetails.PATIENT_ID }
    this.service.getprof(obj2).subscribe(res => {
      this.typeDetails4 = res
      console.log(res)
    })
  }

  // displayitems5() {
  //   const obj2 = { user_id: this.userdetails.user_id }
  //   this.service.getreven(obj2).subscribe(res => {
  //     this.typeDetails5 = res
  //     console.log(res)
  //   })
  // }

  preview1(opportunity_id: any) {
    this.router.navigate(['/proto/folio'], { queryParams: { opportunity_id: opportunity_id } })
  }

  // displayitems7() {
  //   const obj2 = { opportunity_id: this.userdetails.opportunity_id,user_id: this.userdetails.user_id}
  //   this.service.getchart04(obj2).subscribe((res: any) => {
  //     this.result = res
  //     console.log(res)
  //     this.userdetaissecond=res
  //   })
  // }
  // displayitems8() {
  //   const obj2 = { opportunity_id: this.userdetails.opportunity_id,user_id: this.userdetails.user_id}
  //   this.service.getchart01(obj2).subscribe((res: any) => {
  //     this.result = res
  //     console.log(res)
  //     this.userdetaisone=res
  //   })}
    
  //     this.crudData = res.users;
  //     this.crudData3 = res.users1;
  //     console.log(this.crudData)
  //     console.log(this.crudData3)

  //     this.crudData1 =  this.crudData.map((coins: any) => coins.months);
  //     this.crudData2 = this.crudData.map((coins: any) => coins.revenues);
  //     console.log(this.crudData1);
  //     console.log(this.crudData2)

  //  this.chartData = [{
  //     data: [this.userdetaisone ],
  //     label: 'Revenues',
  //     fill: false
  //   }];
  //   this.chartLabels = [this.userdetaissecond];
  //   this.chartColors = [{
  //     backgroundColor: 'rgba(0, 0, 0, 0.2)',
  //        borderColor: 'rgba(0, 0, 0, 1)'
  //   }];


  //   })
  // }


  displayitems7() {
    const obj = { opportunity_id: this.userdetails.opportunity_id="PH001" }
    this.service.getfirstchart(obj).subscribe(res => {
      this.result = res
      this.chart1 = res
      console.log(res)

      this.months = this.result.map((coins: any) => coins.months);
      this.revenues = this.result.map((coins: any) => coins.revenues);
      this.expenses = this.result.map((coins: any) => coins.expenses);

      console.log(this.months);
      console.log(this.revenues);
      console.log(this.expenses);


      this.chart = new Chart('firstone', {
        type: 'line',
        options: {
          responsive: true,
         
        },
        data: {
          labels: this.months,
          datasets: [
            {
              type: 'line',
              label: 'revenues',
              data: this.revenues,
              backgroundColor: 'rgba(255,0,255,0.4)',
              borderColor: 'rgba(255,0,255,0.4)',
              
            },
           
            {
              type: 'line',
              label: 'expenses',
              data: this.expenses,
              backgroundColor: 'rgba(0,0,255,0.4)',
              borderColor: 'rgba(0,0,255,0.4)',
            }
            
          ]
        }
      });



    })
  }





  displayitems9() {
    const obj = { opportunity_id: this.userdetails.opportunity_id="PH002" }
    this.service.getfirstchart(obj).subscribe(res => {
      this.result = res
      this.chart1 = res
      console.log(res)

      this.months = this.result.map((coins: any) => coins.months);
      this.revenues = this.result.map((coins: any) => coins.revenues);
      this.expenses = this.result.map((coins: any) => coins.expenses);

      console.log(this.months);
      console.log(this.revenues);
      console.log(this.expenses);


      this.chart = new Chart('secondone', {
        type: 'line',
        options: {
          responsive: true,
         
        },
        data: {
          labels: this.months,
          datasets: [
            {
              type: 'line',
              label: 'revenues',
              data: this.revenues,
              backgroundColor: 'rgba(255,0,255,0.4)',
              borderColor: 'rgba(255,0,255,0.4)',
            },
           
            {
              type: 'line',
              label: 'expenses',
              data: this.expenses,
              backgroundColor: 'rgba(0,0,255,0.4)',
              borderColor: 'rgba(0,0,255,0.4)',
            }
          ]
        }
      });



    })
  }



  displayitems10() {
    const obj = { opportunity_id: this.userdetails.opportunity_id="PH003" }
    this.service.getfirstchart(obj).subscribe(res => {
      this.result = res
      this.chart1 = res
      console.log(res)

      this.months = this.result.map((coins: any) => coins.months);
      this.revenues = this.result.map((coins: any) => coins.revenues);
      this.expenses = this.result.map((coins: any) => coins.expenses);

      console.log(this.months);
      console.log(this.revenues);
      console.log(this.expenses);


      this.chart = new Chart('thirdone', {
        type: 'line',
        options: {
          responsive: true,
         
        },
        data: {
          labels: this.months,
          datasets: [
            {
              type: 'line',
              label: 'revenues',
              data: this.revenues,
              backgroundColor: 'rgba(255,0,255,0.4)',
              borderColor: 'rgba(255,0,255,0.4)',
            },
           
            {
              type: 'line',
              label: 'expenses',
              data: this.expenses,
              backgroundColor: 'rgba(0,0,255,0.4)',
              borderColor: 'rgba(0,0,255,0.4)',
            }
          ]
        }
      });



    })
  }



  displayitems11() {
    const obj = { opportunity_id: this.userdetails.opportunity_id="PH006" }
    this.service.getfirstchart(obj).subscribe(res => {
      this.result = res
      this.chart1 = res
      console.log(res)

      this.months = this.result.map((coins: any) => coins.months);
      this.revenues = this.result.map((coins: any) => coins.revenues);
      this.expenses = this.result.map((coins: any) => coins.expenses);

      console.log(this.months);
      console.log(this.revenues);
      console.log(this.expenses);


      this.chart = new Chart('fourthone', {
        type: 'line',
        options: {
          responsive: true,
         
        },
        data: {
          labels: this.months,
          datasets: [
            {
              type: 'line',
              label: 'revenues',
              data: this.revenues,
              backgroundColor: 'rgba(255,0,255,0.4)',
              borderColor: 'rgba(255,0,255,0.4)',
            },
           
            {
              type: 'line',
              label: 'expenses',
              data: this.expenses,
              backgroundColor: 'rgba(0,0,255,0.4)',
              borderColor: 'rgba(0,0,255,0.4)',
            }
          ]
        }
      });



    })
  }



  displayitems12() {
    const obj = { opportunity_id: this.userdetails.opportunity_id="PH007" }
    this.service.getfirstchart(obj).subscribe(res => {
      this.result = res
      this.chart1 = res
      console.log(res)

      this.months = this.result.map((coins: any) => coins.months);
      this.revenues = this.result.map((coins: any) => coins.revenues);
      this.expenses = this.result.map((coins: any) => coins.expenses);

      console.log(this.months);
      console.log(this.revenues);
      console.log(this.expenses);


      this.chart = new Chart('fifthone', {
        type: 'line',
        options: {
          responsive: true,
         
        },
        data: {
          labels: this.months,
          datasets: [
            {
              type: 'line',
              label: 'revenues',
              data: this.revenues,
              backgroundColor: 'rgba(255,0,255,0.4)',
              borderColor: 'rgba(255,0,255,0.4)',
            },
           
            {
              type: 'line',
              label: 'expenses',
              data: this.expenses,
              backgroundColor: 'rgba(0,0,255,0.4)',
              borderColor: 'rgba(0,0,255,0.4)',
            }
          ]
        }
      });



    })
  }



  displayitems13() {
    const obj = { opportunity_id: this.userdetails.opportunity_id="PH004" }
    this.service.getfirstchart(obj).subscribe(res => {
      this.result = res
      this.chart1 = res
      console.log(res)

      this.months = this.result.map((coins: any) => coins.months);
      this.revenues = this.result.map((coins: any) => coins.revenues);
      this.expenses = this.result.map((coins: any) => coins.expenses);

      console.log(this.months);
      console.log(this.revenues);
      console.log(this.expenses);


      this.chart = new Chart('sixthone', {
        type: 'line',
        options: {
          responsive: true,
         
        },
        data: {
          labels: this.months,
          datasets: [
            {
              type: 'line',
              label: 'revenues',
              data: this.revenues,
              backgroundColor: 'rgba(255,0,255,0.4)',
              borderColor: 'rgba(255,0,255,0.4)',
            },
           
            {
              type: 'line',
              label: 'expenses',
              data: this.expenses,
              backgroundColor: 'rgba(0,0,255,0.4)',
              borderColor: 'rgba(0,0,255,0.4)',
            }
          ]
        }
      });



    })
  }







  

}
