import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OppDetailsService } from 'src/app/services/opp-details.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Popup1Component } from './popup1/popup1.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  userDetailForm: any;






  constructor(private fb: FormBuilder, private service: OppDetailsService, private router: Router, private route: ActivatedRoute,
    public dialog : MatDialog,) {
    this.userDetailForm = this.fb.group({
      user_mail_id: ['', Validators.required],
      user_password: ['', Validators.required]
    })

  }

  ngOnInit(): void {
  }
  // routes() {
  //   this.router.navigate(['/opp/details'])
  // }

  logout() {
    const timeout = 50;
    console.log(this.userDetailForm.value)
    sessionStorage.removeItem('userdetails');
    this.router.navigate(['invest/nav'])
    const dialogRef = this.dialog.open(Popup1Component, { 
      width: '400px',
      height: '140px',
    })
    setTimeout(() => {dialogRef.close(); }, timeout)
    
    // hasBackdrop: false
  }

}
