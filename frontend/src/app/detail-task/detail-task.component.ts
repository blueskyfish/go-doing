import { Component, Input } from '@angular/core';
import { TaskEntity } from '../entities';

@Component({
  selector: 'dng-detail-task',
  templateUrl: './detail-task.component.html',
  styles: [`

    .dng-label {
      font-weight: bold;
      padding: .25rem 0;
      margin-bottom: 0;
    }
    .dng-value {
      border: var(--bs-border-color) solid var(--bs-border-width);
      border-radius: var(--bs-border-radius);
      padding: .5rem .75rem;
      margin-bottom: 0;
    }
  `]
})
export class DetailTaskComponent {

  @Input()
  task?: TaskEntity;

}
