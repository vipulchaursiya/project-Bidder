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


   
  constructor(private ds:StoreService,private router:Router) { }   

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

view(p1,p2,p3,p4)
{
  alert("hii");

  
  this.router.navigate(['/dashboard/viewplan'],{queryParams:{Planname:p1,Months:p2,Installment:p3,Interest:p4}});
}

}
 