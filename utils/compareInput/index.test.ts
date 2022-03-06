import { DataElement } from 'state/types/reports';
import { compareInput } from '.';

describe('Compare string value from input to report params', () => {
  const report: DataElement = {
    category: 'testCategory',
    date: 123456,
    description: 'This is my description',
    title: 'This is my title',
    files: [],
  };

  test('Should return true -> value exists in description', () => {
    const filterValue = 'description';
    const checkInput = compareInput(report, filterValue);
    expect(checkInput).toBeTruthy();
  });

  test('Should return true -> value exists in title', () => {
    const filterValue = 'this is my t';
    const checkInput = compareInput(report, filterValue);
    expect(checkInput).toBeTruthy();
  });

  test('Should return true -> value is empty', () => {
    const filterValue = '';
    const checkInput = compareInput(report, filterValue);
    expect(checkInput).toBeTruthy();
  });

  test('Should return false -> value not exists in title or description', () => {
    const filterValue = 'test';
    const checkInput = compareInput(report, filterValue);
    expect(checkInput).toBeFalsy();
  });
});
