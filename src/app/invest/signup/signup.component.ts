import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';
import { OppDetailsService } from 'src/app/services/opp-details.service';
import { LoginComponent } from '../login/login.component';
import { PopupComponent } from '../popup/popup.component';
import { SecondpageComponent } from '../secondpage/secondpage.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  
})

export class SignupComponent implements OnInit {
	separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];



  public patientData: any;
  yesSelected: boolean = true;
  yesSelect: boolean = false;
  Select:boolean= false;
  userDetailForm: any;
  oppDetailForm: any;
  value: any;
  public areCGUAccepted: boolean = false;
  public hasContentBeenRead: boolean = false;
  f: any;
  OPPORTUNITY_NAME: any;
  AREA_NAME: any;
  typeDetails: any;
  Id:any;
  
  constructor(private fb:FormBuilder,  private service: OppDetailsService, private router:Router, private route: ActivatedRoute, public dialogRef: MatDialogRef<SignupComponent>, public dialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,) { 
      console.log(this.data)
      this.userDetailForm= this.fb.group({
        FULL_NAME:['',Validators.required],
        EMAIL:['',Validators.required],
        PHONE_NUMBER:['',Validators.required],
        PASSWORD:['',Validators.required],
        TERMS:['',Validators.requiredTrue],
        PRODUCT_NAME:['',Validators.required],
         LOCATION:['',Validators.required],
      })

    }
  ngOnInit(): void {
  }
  /*
  Next(){

    this.yesSelect=true;
    this.yesSelected=false;
    
  }
  Submit(){
    this.Select=true;
    this.yesSelect=false;
        
  }
  backk(){

    this.yesSelect=true;
    this.yesSelected=false;
    this.Select=false;
    
  }
  back(){

    this.yesSelect=false;
    this.yesSelected=true;
    this.Select=false
    
  }
  */
 

  signup(){
    console.log(this.userDetailForm.value)
    const obj = {...this.userDetailForm.value,PRODUCT_NAME : this.data.PRODUCT_NAME, LOCATION:this.data.LOCATION}
      this.service.signupData(obj).subscribe((res:any) =>{
        console.log(res)
        this.dialogRef.close()
        let dialogRef = this.dialog.open(PopupComponent, {
          width: '600px',
          height: '240px',     
    })
  })
  }  
  openLogin() {
    this.dialogRef.close(SignupComponent)
    let dialogRef = this.dialog.open(LoginComponent, {
      width: '800px',
      height: '550px',
      panelClass:'background'
      // hasBackdrop: false
    });
    dialogRef.afterClosed().subscribe(result => {
     
    });
  }
  disableField(checked: any) {
    Object.keys(this.f).forEach(key => {
      if (!checked) {
        this.f[key].disable();
      } else {
        this.f[key].enable();
      }
    });
  }

  // displayitems(Id:any){
  //   this.service.getItemDetail({ID:Id}).subscribe(res =>{
  //     this.typeDetails=res
     
  //     console.log(this.OPPORTUNITY_NAME)
  //     console.log(this.AREA_NAME)
  //   }) 
  // }
}
