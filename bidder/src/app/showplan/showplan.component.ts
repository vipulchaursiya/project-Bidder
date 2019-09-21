import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';
import { Bidder } from '../model/planbidder';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showplan',
  templateUrl: './showplan.component.html',
  styleUrls: ['./showplan.component.css']
})
export class ShowplanComponent implements OnInit {
   s:any;
  constructor(private ds:StoreService,private route:Router) {}   
   m;
  ngOnInit() {
       
    this.ds.showplandata().subscribe((data) =>{
      this.s=data.docs;
      
      
     //alert(JSON.stringify(this.s));
    })   
   }
   delete(p){ 
     this.ds.deleteplan(p).subscribe((data) =>{      
     this.ds.showplandata().subscribe((data) =>{
      this.s=data.docs;     
      
     //alert(JSON.stringify(this.s));
    }) 
     })     
   }
 
  

}
 