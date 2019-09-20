import { Component, OnInit } from '@angular/core';
import { Bidder } from '../model/planbidder';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-createplan',
  templateUrl: './createplan.component.html',
  styleUrls: ['./createplan.component.css']
})
export class CreateplanComponent implements OnInit {
  
   f=new Bidder();
  constructor(private ds:StoreService) { }

  ngOnInit() {
  }
  submit(){
   
    this.ds.plandata(this.f).subscribe( (data) =>{    

    
    })
  }
}
