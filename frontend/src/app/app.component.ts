import { Component } from '@angular/core';

@Component({
  selector: 'dng-container',
  templateUrl: './app.component.html',
  styles: [`
    .dng-main {
      padding-top: 3.5rem;
      overflow: auto;
      height: 100%;
    }
  `]
})
export class AppComponent {
  title = 'Doing Frontend';
}
