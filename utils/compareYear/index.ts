import { DEFAULT_TAGS } from 'state/types/reports';

export const compareYear = (timestamp: number, filterValue: string) => {
  const date = new Date(timestamp);
  const year = date.getFullYear().toString();
  return filterValue === DEFAULT_TAGS.ALL || year === filterValue;
};
