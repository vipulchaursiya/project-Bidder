import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
@Component({
  selector: 'app-usershowplan',
  templateUrl: './usershowplan.component.html',
  styleUrls: ['./usershowplan.component.css']
})
export class UsershowplanComponent implements OnInit {
s:any;
  constructor(private ds:StoreService) { }

  ngOnInit() {
    this.ds.showplandata().subscribe((data) =>{
      this.s=data.docs;
      
     //alert(JSON.stringify(this.s));
    })   
  }

}
