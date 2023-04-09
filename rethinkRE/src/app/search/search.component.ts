import { Component, OnInit } from '@angular/core';
import { Data } from '../obj/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit{
  constructor(private http: HttpClient) { }

  public ogMaps = "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3255.9552699376427!2d-80.735164!3d35.3070929!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1680979915363!5m2!1sen!2sus";

  public propMaps = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d104190.59469267109!2d-80.80520393999278!3d35.307072669417366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shouses%20for%20sale%20in%20charlotte%20nc!5e0!3m2!1sen!2sus!4v1681021769650!5m2!1sen!2sus";

  public property = "Residential";

  public rates = [387231, 399270, 294762, 325521, 395658, 395709];

  ngOnInit(): void {
    // let gMap = document.getElementById("map");
    // gMap?.setAttribute("src", this.ogMaps)
  }

  changeProp(value:string): void {
    this.property = value;
  }

  getMap() {
    let gMap = document.getElementById("map");
    console.log(gMap);
    gMap?.setAttribute("src", this.propMaps);
    let pricing = document.getElementById("prices");
    while(pricing?.firstChild){
      pricing.removeChild(pricing.firstChild);
  }
    for (let i = 0; i < 5; i++) {
      var text = document.createTextNode("Pricing for " + this.property + " #" + (i + 1) + " is $" + this.rates[i]);
      pricing?.appendChild(text);
      var br = document.createElement("br");
      pricing?.appendChild(br);
    }

  }



}
