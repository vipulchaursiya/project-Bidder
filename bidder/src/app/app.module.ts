import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateplanComponent } from './createplan/createplan.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SignupComponent } from './signup/signup.component';
import { ShowplanComponent } from './showplan/showplan.component';
import { MysocietiesComponent } from './mysocieties/mysocieties.component';
import { CreatesocietyComponent } from './createsociety/createsociety.component';
import { ShowsocietiesComponent } from './showsocieties/showsocieties.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UsersidebarComponent } from './usersidebar/usersidebar.component';
import { UsershowplanComponent } from './usershowplan/usershowplan.component';
import { environment } from 'src/environments/environment';
import { ViewplanComponent } from './viewplan/viewplan.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateplanComponent,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    SignupComponent,
    ShowplanComponent,  
    MysocietiesComponent, CreatesocietyComponent, ShowsocietiesComponent, UserdashboardComponent, UsersidebarComponent, UsershowplanComponent, ViewplanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DatePickerModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
