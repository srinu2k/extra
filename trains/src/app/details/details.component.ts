import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { DeleteService } from '../service/delete.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:any;
  bookingorder:any;
  constructor(private httpClientService: DeleteService,private router: Router) { }

public getbookbyid(){
  let ord=this.httpClientService.getCurrentResto(this.id);
  ord.subscribe((data)=>this.bookingorder=data)

}

deleteResto(id: any)
  {
    this.httpClientService.deleteResto(id).subscribe((result: any)=>{
      console.warn("result",result)
      alert("ticket cancelled");
      (<any>this.router).navigate(["/user"])
    })
  }


  ngOnInit(): void {
    let ord=this.httpClientService.getorders();
    ord.subscribe((data)=>this.bookingorder=data); 
  }

}

