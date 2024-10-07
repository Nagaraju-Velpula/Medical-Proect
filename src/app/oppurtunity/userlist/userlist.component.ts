import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OppDetailsService } from 'src/app/services/opp-details.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  public crudData: any = []

  constructor(private router: Router, private service: OppDetailsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.userItems().subscribe((res: any) => {
      console.log(res)
      this.crudData = res.users;
    })
  }

}
