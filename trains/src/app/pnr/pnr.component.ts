import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PnrService,bookingorder } from '../service/pnr.service';

@Component({
  selector: 'app-pnr',
  templateUrl: './pnr.component.html',
  styleUrls: ['./pnr.component.css']
})
export class PnrComponent implements OnInit {

  train:bookingorder[]=[];
  constructor(private httpClientService: PnrService,private router:Router) { }

  ngOnInit(): void {
    let ord=this.httpClientService.getorders();
    ord.subscribe((data)=>this.train=data); 
    
  }

}
