import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TaskEntity } from '../entities';

@Component({
  selector: 'dng-task-list',
  templateUrl: './task-list.component.html',
  styles: [`
    .table {
      .id-col {
        width: 5%;
        text-align: end;
      }
      .title-col {
        width: 40%;
        text-align: start;
      }
      .done-col {
        width: 20%;
        text-align: center;
      }
      .date-col {
        width: 20%;
        text-align: start;
      }
      .action-col {
        width: 15%;
        text-align: end;
      }

      thead > tr > th {
        vertical-align: bottom;
      }

      tbody > tr > td {
        vertical-align: middle;
      }
    }
  `
  ]
})
export class TaskListComponent implements OnInit {

  taskList: TaskEntity[] = [];

  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.loadTaskList();
  }

  routeTaskById(task: TaskEntity, view: string): string[] {
    return ["/", "task", `${task.id}`, view]
  }

  refreshTaskList(): void {
    this.loadTaskList();
  }

  private loadTaskList(): void {
    this.http.get<TaskEntity[]>('/api/tasks')
      .subscribe((list: TaskEntity[]) => {
        this.taskList = list;
      });
  }
}
