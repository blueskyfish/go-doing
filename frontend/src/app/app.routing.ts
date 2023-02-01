import { Routes } from '@angular/router';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AboutComponent } from './about/about.component';

export const ROUTE_LIST: Routes = [
  {
    path: 'tasks',
    component: TaskListComponent
  },
  {
    path: 'task/new',
    component: NewTaskComponent
  },
  {
    path: 'task/:id/detail',
    component: TaskDetailComponent,
  },
  {
    path: 'task/:id/edit',
    component: EditTaskComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: '/tasks'
  }
];
