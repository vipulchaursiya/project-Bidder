import { Component, OnInit } from '@angular/core';
import { user } from '../model/user';
import { HttpClient } from 'selenium-webdriver/http';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
   l= new user();
   mail;
   alert;
  constructor( private ds:StoreService, private route:Router) { }

  ngOnInit() {
  }
  checkemail(){
    this.ds.checkmail(this.l).subscribe((data) =>{
      this.mail=data
      this.l.role="user"
     if(this.mail.status=="false"){
      this.alert="this email already exists"
     }
     else{
       this.alert="";
     }
    })
  }

  signup(){
    if(this.alert==""){
    this.l.role="user";
    this.ds.signupdata(this.l).subscribe( (data) =>{
      this.route.navigate(['/userdashboard']);
    })
  }
  }

  

}
