import { Injectable } from '@angular/core';
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { formatDate, parseDate } from './data-util';


@Injectable()
export class DateAdapterService extends NgbDateAdapter<string> {

  fromModel(value: string | null): NgbDateStruct | null {
    return parseDate(value);
  }

  toModel(date: NgbDateStruct | null): string | null {
    return formatDate(date);
  }

}
