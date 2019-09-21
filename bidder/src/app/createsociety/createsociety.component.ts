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
val;found;

sociatyModel= new Bidder();
  constructor( private ds:StoreService) { }
  ngOnInit() {   
    this.ds.showplandata().subscribe( (data) =>{
      this.pn=data.docs;
    })
  }      
   submit(){
     this.pn.forEach(element => { 
      
       if(element._id===this.sociatyModel.masterPlanId)
       {
         this.found={plandata:element, Date:this.sociatyModel.Date};         
       }
     }); 
    
     //alert(JSON.stringify(this.sociatyModel));
     this.ds.sendsocietydata(this.found).subscribe( (data) =>{
      
     })
   }
}
