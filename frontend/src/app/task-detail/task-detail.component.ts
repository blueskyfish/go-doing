import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap, throwError } from 'rxjs';
import { TaskEntity } from '../entities';

@Component({
  selector: 'dng-task-detail',
  templateUrl: './task-detail.component.html',
  styles: [
  ]
})
export class TaskDetailComponent implements OnInit {

  task?: TaskEntity;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
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

  routeTaskEdit(): any[] {
    if (!this.task) {
      return [];
    }
    return ['/', 'task', this.task.id, 'edit'];
  }
}
