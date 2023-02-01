import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, map, SubscriptionLike } from 'rxjs';
import { TaskEntity } from '../entities';
import { buildControl } from '../util/form-util';

export const EMPTY_TASK: TaskEntity = {
  id: -1,
  title: '',
  description: '',
  done: false,
  date: '',
}

const pad = (value: any, len: number = 2): string => {
  return `${value}`.padStart(len, '0');
}

const adjustDate = (value: NgbDate | string | undefined | null): string => {
  if (typeof value === 'string') {
    return value;
  }
  if (value === null || value === undefined) {
    return ''
  }
  if (value.day || value.month || value.year) {
    return `${value.year}-${pad(value.month)}-${pad(value.day)}`;
  }
  return '';
}

const parseDate = (value: string): NgbDateStruct | string => {
  const [year, month, day ] = value.split('-');
  try {
    return {
      year: parseInt(year, 10),
      month: parseInt(month, 10),
      day: parseInt(day, 10),
    }
  } catch (e) {
    return ''
  }
}

@Component({
  selector: 'dng-task-form',
  templateUrl: './task-form.component.html',
  styles: []
})
export class TaskFormComponent implements OnInit, OnDestroy {

  private subscriber$?: SubscriptionLike;

  private _task: TaskEntity = { ...EMPTY_TASK };

  @Input()
  resetTask: TaskEntity = { ...EMPTY_TASK };

  @Input()
  set task(value: TaskEntity | undefined) {
    this._task = value ?? { ...EMPTY_TASK};
    if (value) {
      this.formGroup.patchValue({
        ...value,
        date: parseDate(value.date) as string,
      }, { emitEvent: false });
    } else {
      this.formGroup.patchValue(EMPTY_TASK, { emitEvent: false })
    }
  }

  get task(): TaskEntity | undefined {
    return this._task;
  }

  @Output()
  taskChange: EventEmitter<TaskEntity> = new EventEmitter<TaskEntity>();

  get isNew(): boolean {
    return (this._task?.id ?? 0) <= 0;
  }

  readonly formGroup = new FormGroup({
    id: buildControl(EMPTY_TASK.id),
    title: buildControl(EMPTY_TASK.title, Validators.required),
    description: buildControl(EMPTY_TASK.description),
    done: buildControl(EMPTY_TASK.done),
    date: buildControl(EMPTY_TASK.date),
  });

  ngOnInit(): void {
    this.subscriber$ = this.formGroup
      .valueChanges
      .pipe(
        // @ts-ignore
        debounceTime(100),
        map((value: TaskEntity): TaskEntity => {
          return {
            ...value,
            date: adjustDate(value.date),
          };
        })
      )
      // @ts-ignore
      .subscribe((task: TaskEntity) => this.taskChange.emit(task))
  }


  ngOnDestroy(): void {
    this.subscriber$?.unsubscribe();
  }

  setResetTask(): void {
    this.task = { ...this.resetTask };
  }
}
