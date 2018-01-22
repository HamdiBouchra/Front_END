import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info = {
    tel: "512365478",
    email: "jhjhjhjhj"
  };
  constructor() { }

  ngOnInit() {
  }

}
