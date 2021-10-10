import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import { TraindataService, Trains } from '../service/traindata.service';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  [x: string]: any;
  
  bookSeats=new FormGroup(
    {
        id: new FormControl(''),
        quantity: new FormControl(''),
        startStation: new FormControl(''),
        endStation:new FormControl(''),
        date:new FormControl(''),
        email:new FormControl(''),
        name:new FormControl(''),
  	    age:new FormControl(''),
  	    gender:new FormControl(''),
  	    credit:new FormControl(''),
	      address:new FormControl(''),
	      berth:new FormControl(''),
	      bankname:new FormControl(''),
    })
    trains: Trains[] = [];
    constructor(private httpClientService: UserServiceService,private router:Router,private httpClientServic: TraindataService) { }
  
    ngOnInit(): void {
    }
    collectTicks()
    {
      this.httpClientService.saveResto(this.bookSeats.value).subscribe((result: any)=>{
      console.warn("result",result);
      (<any>this.router).navigate(["/admin"]) 
      alert("your ticker is booked");
    })
    }
    

    

search()
{
 // console.warn(this.editResto.value);
  this.httpClientServic.updateResto(this.text).subscribe((result: any)=>{
    console.warn(result)
    this.trains=result
  })
}

search1()
{
 // console.warn(this.editResto.value);
  this.httpClientServic.updateRest(this.text1).subscribe((result: any)=>{
    console.warn(result)
    this.trains=result
  })
}

  }
    
