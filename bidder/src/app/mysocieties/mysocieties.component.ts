import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-mysocieties',
  templateUrl: './mysocieties.component.html',
  styleUrls: ['./mysocieties.component.css']
})
export class MysocietiesComponent implements OnInit {

  constructor(private ds :StoreService) { }

  ngOnInit( ) {
  
   
  }
     
}
