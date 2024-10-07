import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OppDetailsService } from 'src/app/services/opp-details.service';

@Component({
  selector: 'app-opp-details',
  templateUrl: './opp-details.component.html',
  styleUrls: ['./opp-details.component.css']
})
export class OppDetailsComponent implements OnInit {
  fileName!: string;
  file!: File;
  oppfileName!: string;
  oppfile!: File;
  oppDetailForm:FormGroup
  opptype!: string;
  opportunityType: any;
  opportunityStandard: any;
  opportunityArea: any;
  opportunityCountry: any;
  opportunity_name: any;
  oppDetails: any;
  opportunityName: any;
  Id: any;
  opportunityDuration: any;
  selectedFiles?: FileList;
  
  progressInfos: any[] = [];
  message: string[] = [];

  previews: string[] = [];
  imageInfos?: Observable<any>;

 

  constructor(private fb:FormBuilder,private service:OppDetailsService,private router:Router, private route:ActivatedRoute) { 
    this.oppDetailForm= this.fb.group({
      opportunity_name:['',Validators.required],
      Investment_Amount:['',Validators.required],
      ROI:['',Validators.required],
      Opportunity_Type:['',Validators.required],
      Area_Name:['',Validators.required],
      Area_Standard:['',Validators.required],
      Revenue:['',Validators.required],
      Expenses:['',Validators.required],
      Tax:['',Validators.required],
      Opportunity_Desc:['',Validators.required],
      Tenant_Name:['',Validators.required],
      Tenant_Country:['',Validators.required],
      Tenant_Desc:['',Validators.required],
      Contract_Duration:['',Validators.required],
      Starting_Date:['',Validators.required],
      Ending_Date:['',Validators.required],
      STATUS:['',Validators.required]
    })

    this.route.queryParams.subscribe(params =>{
       if(params['Id']){
         this.Id=params['Id']
         this.edititems(params['Id'])
       }
      (console.log(params,'ppp'))})
  }

  ngOnInit(): void {
    this.getOppTypes();
    this.getAreaStandard();
    this.getAreaName();
    this.getTenantCountry();
    this.getopportunity_name();
    this.getDuration();
  
  }

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }


  getDuration(){
    this.service.getContract().subscribe(res =>{
      console.log(res)
      this.opportunityDuration=res
    })
  }

  getOppTypes() {
    this.service.getOppurtunities().subscribe(res =>{
      console.log(res)
      this.opportunityType=res
    })
  }
 
  getAreaStandard() {
    this.service.getOppurtunitie().subscribe(res =>{
      console.log(res)
      this.opportunityStandard=res
    })
  }
  getAreaName() {
    this.service.getOppurtunity().subscribe(res =>{
      console.log(res)
      this.opportunityArea=res
    })
  }
  getTenantCountry() {
    this.service.getOpp().subscribe(res =>{
      console.log(res)
      this.opportunityCountry=res
    })
  }
  getopportunity_name() {
    this.service.getopportunityname().subscribe(res =>{
      console.log(res)
      this.opportunityName=res
    })
    
  }

  trigger() {
    let element = document.getElementById('upload_file') as HTMLInputElement;
    element.click();
  }
  onChange(file:any) {
    this.file = file.files[0];
    this.fileName = file.files[0].name;
    console.log(this.file,this.fileName)
  }
  removeFile() {
    //this.file = undefined;
    this.fileName = '';
  }
  trigger1() {
    let element = document.getElementById('upload_file1') as HTMLInputElement;
    element.click();
  }
  onChange1(file:any) {
    this.oppfile = file.files[0];
    this.oppfileName = file.files[0].name;
    console.log(this.oppfile,this.oppfileName)
  }
  togglebtn(inp:string) {
    this.opptype=inp
  }
  submit(){
    console.log(this.oppDetailForm.value)
    this.service.postItems(this.oppDetailForm.value).subscribe(res =>{
      console.log(res)
      this.router.navigate(['opp/list'])
    })
  }
  edititems(Id:any){
    this.service.getItemDetail({ID:Id}).subscribe(res =>{
      console.log(res,'rrr')
      this.oppDetails=res
      this.patchData()
    })
  }
  patchData(){
    this.oppDetailForm.patchValue({
      opportunity_name:this.oppDetails[0].OPPORTUNITY_NAME,
      Investment_Amount:this.oppDetails[0].INVESTMENT_AMOUNT,
      ROI:this.oppDetails[0].ROI,
      Opportunity_Type:this.oppDetails[0].OPPORTUNITY_TYPE,
      Opportunity_Desc:this.oppDetails[0].OPPORTUNITY_DESC,
      Area_Name:this.oppDetails[0].AREA_NAME,
      Area_Standard:this.oppDetails[0].AREA_STANDARD,
      Revenue:this.oppDetails[0].REVENUE,
      Expenses:this.oppDetails[0].EXPENSES,
      Tax:this.oppDetails[0].TAX,
      Tenant_Name:this.oppDetails[0].TENANT_NAME,
      Tenant_Country:this.oppDetails[0].TENANT_COUNTRY,
      Tenant_Desc:this.oppDetails[0].TENANT_DESC,
      Contract_Duration:this.oppDetails[0].CONTRACT_DURATION,
      Starting_Date:this.oppDetails[0].STARTING_DATE,
      Ending_Date:this.oppDetails[0].ENDING_DATE,
      STATUS:this.oppDetails[0].STATUS,
    })
  }
  
  editForm(){
    const data={
      Id:this.Id,...this.oppDetailForm.value
    }
    console.log(data)
    this.service.updateItems(data).subscribe(res=>{
     console.log(res)
     this.router.navigate(['opp/list'])
          
    })

  }
  durationChange(data:any) {
    let date= new Date();
    let setFromDate;
    let setEndDate;
    let presentDate = new Date(date.getFullYear(), date.getMonth()+1, date.getDate());
    let futureDate = new Date(date.getFullYear() + Number(data.target.value), date.getMonth()+1, date.getDate());
    let furDate=futureDate.getDate() > 9 ? futureDate.getDate():'0'+futureDate.getDate();
    let preDate=presentDate.getDate() > 9 ? presentDate.getDate():'0'+presentDate.getDate();
    if(date.getMonth()<10){
     setFromDate= presentDate.getFullYear()+'-0'+presentDate.getMonth()+'-'+preDate
     setEndDate= futureDate.getFullYear()+'-0'+futureDate.getMonth()+'-'+furDate
    }else {
      setFromDate=presentDate.getFullYear()+'-'+presentDate.getMonth()+'-'+preDate
      setEndDate= futureDate.getFullYear()+'-'+futureDate.getMonth()+'-'+furDate 
    }
    this.oppDetailForm.controls.Starting_Date.setValue(setFromDate)
    this.oppDetailForm.controls.Ending_Date.setValue(setEndDate)

    
    
    }
    delete(){
      const data={
        Id:this.Id,...this.oppDetailForm.value
      }
      console.log(data)
      this.service.deleteData(data).subscribe(res=>{
       console.log(res)
            
      })
  
    }
}
