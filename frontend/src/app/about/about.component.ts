import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AboutEntity } from '../entities';

@Component({
  selector: 'dng-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  about?: AboutEntity;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<AboutEntity>('/api/about')
      .subscribe((about: AboutEntity) => {
        this.about = about;
      })
  }
}
