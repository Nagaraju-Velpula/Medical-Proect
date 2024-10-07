import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Urls } from '../service-urls/urls';

@Injectable({
  providedIn: 'root'
})
export class OppDetailsService {
  dataitem: any;

 

  constructor(private http: HttpClient) {
    
  }


  public getContract() {
    return this.http.get<any>(Urls.contract)
  }

  public getOppurtunities() {
   return this.http.get<any>(Urls.OPPTYPE)  
  }

  public getOppurtunitie() {
    return this.http.get<any>(Urls.areaStandard)  
  }
  public getOppurtunity() {
    return this.http.get<any>(Urls.areaName)  
  }
   
  public getOpp() {
    return this.http.get<any>(Urls.Tenant_Country)  
  }
  public getopportunityname() {
    return this.http.get<any>(Urls.opportunity_name)  
  }
  
  public postItems(data:any) {
    return this.http.post(`${environment.BASE_URL}product`,data)
  }

  public getItems() {
    return this.http.get(`${environment.BASE_URL}preview`)
  }
  public getItem1() {
    return this.http.get(`${environment.BASE_URL}display`)
  }
  
  public getItemDetail(data:any) {
    return this.http.post(`${environment.BASE_URL}edit`,data)
  }

  public getItemDetail1(data:any) {
    return this.http.post(`${environment.BASE_URL}inv`,data)
  }
  public getInves(data:any) {
    return this.http.post(`${environment.BASE_URL}inves`,data)
  }
  
  public updateItems(data:any) {
    return this.http.put(`${environment.BASE_URL}update`,data)
  }

  public userItems() {
    return this.http.get(`${environment.BASE_URL}userdetails`)
  }
  public deleteData(data:any) {
    return this.http.post(`${environment.BASE_URL}delete`,data)
  }
  public signupData(data:any) {
    return this.http.post(`${environment.BASE_URL}signup`,data)
  }
  public loginData(data:any) {
    return this.http.post(`${environment.BASE_URL}login`,data)
  } 
  public loginData01(data:any) {
    return this.http.post(`${environment.BASE_URL}login01`,data)
  } 
  public getInvested(data:any) {
    return this.http.post(`${environment.BASE_URL}in`,data)
  }
  public getCharts(data:any) {
    return this.http.post(`${environment.BASE_URL}userdetailssecond`,data)
  }
  public getItemProto(data:any) {
    return this.http.get(`${environment.BASE_URL}play`,data)
  }
  public getsess(data:any) {
    return this.http.get(`${environment.BASE_URL}session`,data)
  }
  public getadd(data:any) {
    return this.http.post(`${environment.BASE_URL}add`,data)
  }
  public getadd1(data:any) {
    return this.http.post(`${environment.BASE_URL}som`,data)
  }
  public getrev(data:any) {
    return this.http.post(`${environment.BASE_URL}rev`,data)
  }
  public getprof(data:any) {
    return this.http.post(`${environment.BASE_URL}prof`,data)
  }
  // public getreven(data:any) {
  //   return this.http.post(`${environment.BASE_URL}revenue`,data)
  // }



  public getchart01(data:any) {
    return this.http.post(`${environment.BASE_URL}userdetailsone`,data)
  }
  public getfirstchart(data:any) {
    return this.http.post(`${environment.BASE_URL}first_chart`,data)
  }
  public getchart02() {
    return this.http.get(`${environment.BASE_URL}second_chart`,)
  }
  public getchart03() {
    return this.http.get(`${environment.BASE_URL}third_chart`,)
  }
  public getchart04(data:any) {
    return this.http.post(`${environment.BASE_URL}userdetailssecond1`,data)
  }
  public getout() {
    return this.http.get(`${environment.BASE_URL}logout`,)
  }
  public admindata(data:any) {
    return this.http.post(`${environment.BASE_URL}admin`,data)
  }
}

