import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import {Router , Routes } from '@angular/router' ; 

export const appRoute : Routes = [
    {path:''  , component:HomeComponent } , 
    {path:'users' , component:UsersComponent}
]