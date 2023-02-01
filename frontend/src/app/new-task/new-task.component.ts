import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskEntity } from '../entities';
import { EMPTY_TASK } from '../task-form/task-form.component';

@Component({
  selector: 'dng-new-task',
  templateUrl: './new-task.component.html',
  styles: [
  ]
})
export class NewTaskComponent {
  task: TaskEntity = { ...EMPTY_TASK };

  changedTask?: TaskEntity;

  constructor(private router: Router, private http: HttpClient) {
  }

  saveTask(): void {
    this.http.post<TaskEntity>('/api/tasks', this.changedTask)
      .subscribe({
        next: (task: TaskEntity) => {
          this.router.navigate(['/', 'task', task.id, 'detail'])
            .catch((reason) => {
              // TODO
            })
        },
        error: (reason) => {
          // TODO
        }
      })
  }
}
