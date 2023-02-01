import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ROUTE_LIST } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { DetailTaskComponent } from './detail-task/detail-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskListComponent,
    NewTaskComponent,
    AboutComponent,
    EditTaskComponent,
    TaskDetailComponent,
    TaskFormComponent,
    DetailTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTE_LIST, {
      useHash: true,
    }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
