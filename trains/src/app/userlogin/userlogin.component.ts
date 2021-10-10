import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PassengerloginService } from '../service/passengerlogin.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  x: any;
  adminlog=new FormGroup(
    {
        username: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required),
        
    })
    constructor(private httpClientService: PassengerloginService,private router:Router) { }
  
    ngOnInit(): void {}
    validate()
    {
      this.httpClientService.saveResto(this.adminlog.value).subscribe((result: any)=>{
      console.warn("result",result)    
        this.x=result
        console.warn(this.x.response)
        if(this.x.response=="no"){
          
          (<any>this.router).navigate(["/userlogin"])  
          alert("Invalid Credentials");
        }
        else
        {
          (<any>this.router).navigate(["/user"]) 
  
        }
    })
    }
  } 