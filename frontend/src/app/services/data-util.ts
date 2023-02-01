import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export const DEL = '-'

export const pad = (s: number | string, len = 2): string => {
  return `${s}`.padStart(len, '0');
};

export const parseNum = (s: string | number| undefined | null, def: number): number => {
  if (typeof s === 'number') {
    return s;
  }
  if (typeof s === 'string') {
    const v = parseInt(s, 10);
    if (`${v}` === s) {
      return v;
    }
  }
  return def;
};

export const parseDate = (value: string | null): NgbDateStruct | null => {
  if (value) {
    const today = new Date();
    const [ year, month, day, _ ] = value.split(DEL);
    return {
      year: parseNum(year, today.getFullYear()),
      month: parseNum(month, today.getMonth() + 1),
      day: parseNum(day, today.getDate())
    };
  }
  return null;
};

export const formatDate = (date: NgbDateStruct | null): string | null => {
  if (!date) {
    return null;
  }
  return [pad(date.year, 4), pad(date.month), pad(date.day)].join(DEL);
}
