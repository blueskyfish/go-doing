import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, switchMap, throwError } from 'rxjs';
import { TaskEntity, TaskPayload } from '../entities';

@Component({
  selector: 'dng-edit-task',
  templateUrl: './edit-task.component.html',
  styles: [
  ]
})
export class EditTaskComponent implements OnInit {

  task!: TaskEntity;

  changedTask?: TaskPayload;


  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.route
      .paramMap
      .pipe(
        map((paramMap: ParamMap) => paramMap.get('id')),
        switchMap((id) => {
          if (!id) {
            return throwError(() => Error('Missing task id'))
          }
          return this.http.get<TaskEntity>(`/api/tasks/${id}`)
        })
      )
      .subscribe({
        next: (task: TaskEntity) => {
          this.task = task;
        },
        error: (reason) => {
          // TODO
        }
      })
  }

  changeTask(task: TaskEntity): void {
    this.changedTask = {
      title: task.title,
      description: task.description,
      done: task.done,
      date: task.date
    };
  }

  routeTaskDetail(): any[] {
    if (!this.task) {
      return [];
    }
    return ['/', 'task', this.task.id, 'detail'];
  }

  saveTask(): void {
    this.http.put<TaskEntity>(`/api/tasks/${this.task.id}`, this.changedTask)
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
