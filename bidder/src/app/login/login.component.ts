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
  d; mail;
  alert;

  constructor( private ds:StoreService ,private route:Router) { }
  
  ngOnInit() {
  }
  verifyuser(){
    this.ds.checkmail(this.l).subscribe( (data) =>{
      this.mail=data;
      console.log(this.mail);
      if(this.mail.status=="false"&& this.l.email>0){
        this.alert="This Email deos not exits, please sign up first";
      }
      else{
        this.alert="";
      }
    })
  }
  login(){
      this.ds.userdata(this.l).subscribe( (data) =>{
    this.d=data;
         console.log(this.d.status);
         console.log(this.d)
         if(this.d.doc[0].role=="admin" ){
          // localStorage.setItem("email",this.d.doc[0].email);
           this.route.navigate(['/dashboard']);
         } 
         else if(this.d.doc[0].role=="user"){
          localStorage.setItem('email',this.d.doc[0].email);
          localStorage.setItem('role',this.d.doc[0].role);
           this.route.navigate(['/userdashboard']);
         } 
     });
  }
  signUp(){
    this.route.navigate(['/signup']);
  }  
   
}
