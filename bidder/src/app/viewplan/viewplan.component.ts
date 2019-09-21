import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewplan',
  templateUrl: './viewplan.component.html',
  styleUrls: ['./viewplan.component.css']
})
export class ViewplanComponent implements OnInit {
na;
mo;
int;
ins;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

   this.route.queryParamMap.subscribe((data)=>
   {
      this.na=data.get('Planname');
      this.mo=data.get('Months');
      this.ins=data.get('Installment');
      this.int=data.get('Interest');
   })


  }

}
