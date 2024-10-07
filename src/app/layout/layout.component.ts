import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  adminForm: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  routes() {
//this.router.navigate(['/opp/details'])
  }

  adminout(){
       
    this.router.navigate(['auth/in'])
  }
}
