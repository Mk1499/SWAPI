import { appRoute } from './router';
import {  HttpModule } from '@angular/http';
import { CallApiService } from './Services/call-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';

import {RouterModule} from '@angular/router' ; 
import { LogoComponent } from './logo/logo.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HomeComponent,
    UsersComponent,
    NavBarComponent,
    FooterComponent 
  ],
  imports: [
    BrowserModule, 
    HttpModule , 
    FormsModule , 
    RouterModule.forRoot(appRoute)
  ],
  providers: [CallApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
