import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { OppDetailsService } from 'src/app/services/opp-details.service';

@Component({
  selector: 'app-protofolio',
  templateUrl: './protofolio.component.html',
  styleUrls: ['./protofolio.component.css']
})
export class ProtofolioComponent implements OnInit {
  typeDetails: any;
  Id: any;
  oppDetails: any;
  months: any;
  revenues: any;
  chart: any;
  result: any;
  expenses: any;
  

  constructor(private service:OppDetailsService,private route:ActivatedRoute,) { 
    this.route.queryParams.subscribe(params =>{
      if(params['opportunity_id']){
        this.Id=params['opportunity_id']
        this.displayitems(params['opportunity_id'])
        this.displayitems7(params['opportunity_id'])
      }
     (console.log(params,'ppp'))})
  }

  ngOnInit(): void {
  }
  displayitems(opportunity_id:any){
    this.service.getItemDetail1({opportunity_id:opportunity_id}).subscribe(res =>{
      this.typeDetails=res
      this.typeDetails.forEach((element:any) => {});
      console.log(res)
    })
  }
 
  displayitems7(opportunity_id:any) {
  
    this.service.getfirstchart({opportunity_id:opportunity_id}).subscribe(res => {
      this.result = res
      console.log(res)

      this.months = this.result.map((coins: any) => coins.months);
      this.revenues = this.result.map((coins: any) => coins.revenues);
      this.expenses = this.result.map((coins: any) => coins.expenses);

      console.log(this.months);
      console.log(this.revenues);


      this.chart = new Chart('firstone', {
        type: 'line',
        data: {
          labels: this.months,
          datasets: [
            {
              data: this.revenues,
              borderColor: '#3e95cd',
              label: 'REVENUES',
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderWidth: 3,
            },
            {
              data: this.expenses,
              borderColor: '#3e95cd',
              label: 'EXPENSES',
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderWidth: 3,
            },
          ],
        },
      });
    })
  }
  
  

}
