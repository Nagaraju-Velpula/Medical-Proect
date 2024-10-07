import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OppDetailsService } from 'src/app/services/opp-details.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  adminForm: any;


  constructor(private fb:FormBuilder, private service: OppDetailsService, private router:Router, private route: ActivatedRoute, ) { 
    this.adminForm= this.fb.group({
      USER_NAME:['',Validators.required],
      PASSWORD:['',Validators.required],
    })
  }

  ngOnInit(): void {
  }
  adminlog(){
    console.log(this.adminForm.value)
    this.service.admindata(this.adminForm.value).subscribe((res:any)=>{
       console.log(res)
       this.router.navigate(['opp/details'])
})
}

}
