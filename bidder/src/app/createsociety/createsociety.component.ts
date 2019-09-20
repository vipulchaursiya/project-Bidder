import { Component, OnInit, ViewChild } from '@angular/core';
import { StoreService } from '../store.service';
import { Bidder } from '../model/planbidder';

@Component({
  selector: 'app-createsociety',
  templateUrl: './createsociety.component.html',
  styleUrls: ['./createsociety.component.css']
})
export class CreatesocietyComponent implements OnInit {
pn;
sociatyModel= new Bidder();

  constructor( private ds:StoreService) { }
  // public minDate: Date = new Date ("05/07/2017");
  // public maxDate: Date = new Date ("05/27/2017");
  // public dateValue: Date = new Date ("05/16/2017");

   
  ngOnInit() {
   
    this.ds.showplandata().subscribe( (data) =>{
      this.pn=data.docs;
    })
  }
   submit(){
     console.log(this.sociatyModel);


      
     alert(JSON.stringify(this.sociatyModel));
    //  this.ds.sendsocietydata(this.pn).subscribe( (data) =>{
      
    //  })
   }
}
