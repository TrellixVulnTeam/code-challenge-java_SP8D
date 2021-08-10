import * as dayjs from 'dayjs';

export interface IDifference {
  datetime?: dayjs.Dayjs | null;
  value?: number;
  number?: number;
  occurrences?: number | null;
}

export class Difference implements IDifference {
  constructor(public datetime?: dayjs.Dayjs | null, public value?: number, public number?: number, public occurrences?: number | null) {}
}

export function getDifferenceIdentifier(difference: IDifference): number | undefined {
  return difference.number;
}
