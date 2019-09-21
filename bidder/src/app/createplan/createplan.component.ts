import { Component, OnInit } from '@angular/core';
import { Bidder } from '../model/planbidder';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createplan',
  templateUrl: './createplan.component.html',
  styleUrls: ['./createplan.component.css']
})
export class CreateplanComponent implements OnInit {
  
   f=new Bidder();
  constructor(private ds:StoreService,private router:Router) { }

  ngOnInit() {
  }
  submit(){
   
    this.ds.plandata(this.f).subscribe( (data) =>{    
      this.router.navigate["/dashboard/showplan"];
    
    })
  }
}
