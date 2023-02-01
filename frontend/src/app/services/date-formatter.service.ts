import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { formatDate, parseDate } from './data-util';

@Injectable()
export class DateFormatterService extends NgbDateParserFormatter {

  format(date: NgbDateStruct | null): string {
    return formatDate(date) ?? ''
  }

  parse(value: string): NgbDateStruct | null {
    return parseDate(value);
  }

}
