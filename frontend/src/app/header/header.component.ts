import { Component } from '@angular/core';

@Component({
  selector: 'dng-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  readonly routeAbout = ["/", "about"];
  readonly routeTaskList = ["/", "tasks"];
  readonly routeNewTask = ["/", "task", "new"];
}
