import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PassengerregisterService } from '../service/passengerregister.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  x: any;

  adminlog=new FormGroup(
    {
        username: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required),
        
    })
    constructor(private httpClientService: PassengerregisterService,private router:Router) { }
  
    ngOnInit(): void {
    }
    validate()
    {
      //console.warn(this.addResto.value)
      this.httpClientService.saveResto(this.adminlog.value).subscribe((result: any)=>{
      console.warn("result",result);
      (<any>this.router).navigate(["/home"])  
        alert("Registration successful")
    })
    }
  }

