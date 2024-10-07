import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';
import { OppDetailsService } from 'src/app/services/opp-details.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  userDetailForm: FormGroup

  constructor(private fb: FormBuilder, private service: OppDetailsService, private router: Router, private route: ActivatedRoute, public dialogRef: MatDialogRef<LoginComponent>, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
    this.userDetailForm = this.fb.group({
      user_mail_id: ['', Validators.required],
      user_password: ['', Validators.required]
    })
  }


  ngOnInit(): void {
  }

  login1(){
    console.log(this.userDetailForm.value)
    this.service.loginData01(this.userDetailForm.value).subscribe((res:any) =>{
    console.log(res)
  
    sessionStorage.setItem('userdetails',JSON.stringify(res))
    this.dialogRef.close()
    this.router.navigate(['proto/details'])
      // hasBackdrop: false
    });
  }
  openSignUp() {
    this.dialogRef.close(LoginComponent)
    let dialogRef = this.dialog.open(SignupComponent, {
      width: '800px',
      height: '550px',
      panelClass: 'background',
      // hasBackdrop: false
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }
}


