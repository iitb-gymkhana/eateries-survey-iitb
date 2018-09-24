import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle?: string;

  constructor() { }

  ngOnInit() {
    console.log(this.title);
  }

}
