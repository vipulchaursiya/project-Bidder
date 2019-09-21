import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bidder } from './model/planbidder';
import { Alert } from 'selenium-webdriver';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
 
  constructor(  private http:HttpClient) {}
   a=new Array();
   userdata(l){     
     return this.http.post("http://localhost:4100/userformdata",l);
   }
   plandata(f){
      //alert(JSON.stringify(f));
     return this.http.post('http://localhost:4100/planformdata',f);
   }
   showplandata():any{
     return this.http.get('http://localhost:4100/showplandata');
   }
   signupdata(f){
     return this.http.post('http://localhost:4100/signupformdata',f);
   }
   /////check email at sign up 
   checkmail(f){
     return this.http.post("http://localhost:4100/checkmail",f);
   }
   ////for delete plan from show plan
    deleteplan(f){     
      return this.http.post('http://localhost:4100/deleteplan',{planName:f});
    }
    ///for create society
    sendsocietydata(f){
      alert(JSON.stringify(f));
      return this.http.post('http://localhost:4100/deleteplan',f)
    }


  

}
