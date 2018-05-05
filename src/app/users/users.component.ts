import { CallApiService } from './../Services/call-api.service';
import { Component, OnInit } from '@angular/core';
declare var $:any ; 
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private call:CallApiService) {}

  ngOnInit() {
  
   
    $( function() {
  
      $( ".draggable" ).sortable();
      $( ".draggable" ).disableSelection();
    } );
  }
  
  count : number  ; 
uname:string ; 
username :[string] = [''];
url : [string] = ['']; 
homeworld :[string]= [''] ; 
height : [string] = [''] ; 
i : number = 0 ;
notFound : string = '' ; 
Search(){
  
  this.call.CallApi(this.uname).subscribe(
    next=> {
      if (next.count && this.uname.length>0 ){
        this.notFound = ""
this.count =  next.count ;
for (let i in next.results){ 
  this.username.push( next.results[i].name) ; 
  this.url.push('URL : ' + next.results[i].url) ; 
  this.height.push('Height : ' + next.results[i].height) ; 
  this.homeworld.push('HomeWorld : ' + next.results[i].homeworld)
}

this.username.splice(0,1) ; 
this.url.splice(0,1) ; 
this.height.splice(0,1) ; 
this.homeworld.splice(0,1) ; 
      }
      else if(next.count === 0 ){
        this.notFound = "Sorry But This name Not Found "
      }
    } , 
    error => {
       console.log(error)
    }
  )
}
}
