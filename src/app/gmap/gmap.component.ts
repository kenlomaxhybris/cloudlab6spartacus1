import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})


export class GmapComponent implements OnInit {
  
  staticmapurl: string = ""

  constructor(private http: HttpClient) { 
    http.get("https://us-central1-cloudlab6map.cloudfunctions.net/getstaticmapurl2")        
      .subscribe( (res) => {
        this.staticmapurl = res.url;
    }); 
  }

  ngOnInit() {
   
  }

}