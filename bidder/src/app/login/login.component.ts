import { Component, OnInit } from '@angular/core';
import { user } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { StoreService } from '../store.service';
import { JsonPipe } from '@angular/common';
import { identifierModuleUrl, ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  l =new user();
  d;

  constructor( private ds:StoreService ,private route:Router) { }
  
  ngOnInit() {
  }
 
  login(){
      this.ds.userdata(this.l).subscribe( (data) =>{
    this.d=data;
         console.log(this.d.status);
         if(this.d.status=="okkk"){
           localStorage.setItem("email",this.d.doc[0].email);
           this.route.navigate(['/dashboard']);
         }    
     });
  }
  signUp(){
    this.route.navigate(['/signup']);
  }  
   
}
