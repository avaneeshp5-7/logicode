
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: 'search.html',
  styleUrls: ['search.css']
})
export class SearchComponent implements OnInit {
  user:any;
  // faArrowRight=faArrowRight;
  constructor() {
    this.user=[];
   }

  ngOnInit() {  
    this.user=[{name:'avi'},{name:'Raj'}];
  }
  
}