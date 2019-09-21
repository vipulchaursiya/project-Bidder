import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateplanComponent } from './createplan/createplan.component';
import { SignupComponent } from './signup/signup.component';
import { ShowplanComponent } from './showplan/showplan.component';
import { MysocietiesComponent } from './mysocieties/mysocieties.component';
import { CreatesocietyComponent } from './createsociety/createsociety.component';
import { ShowsocietiesComponent } from './showsocieties/showsocieties.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UsershowplanComponent } from './usershowplan/usershowplan.component';
import { ViewplanComponent } from './viewplan/viewplan.component';



const routes: Routes = [
    { path:'',component:LoginComponent},
    { path:'signup' ,component:SignupComponent},
  { path:'dashboard',component:DashboardComponent,
                                        children:[{path:'viewplan',component:ViewplanComponent},
                                          {  path:'createplan',component:CreateplanComponent},
                                           { path:'showplan' ,component:ShowplanComponent},
                                           
                                           { path:'mysocieties', component:MysocietiesComponent,
                                                        children:[{path:'createsociety',component:CreatesocietyComponent},
                                                                  {path:'showsocieties',component:ShowsocietiesComponent} 
                                                                  ]                         
                                          }
                                        ]},
 { path:'userdashboard' ,component:UserdashboardComponent,children:[{path:'usershowplan' ,component:UsershowplanComponent}]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
