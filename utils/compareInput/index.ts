import { DataElement } from 'state/types/reports';

export const compareInput = (report: DataElement, filterValue: string) => {
  const lowerValue = filterValue.toLowerCase();
  const lowerTitle = report.title.toLowerCase();
  const lowerDescription = report.description.toLowerCase();
  const isEmptyValue = filterValue === ''; // show all records when empty value
  return isEmptyValue || lowerTitle.includes(lowerValue) || lowerDescription.includes(lowerValue);
};
