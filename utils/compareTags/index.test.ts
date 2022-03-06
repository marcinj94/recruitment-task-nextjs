import { DEFAULT_TAGS } from 'state/types/reports';
import { compareTags } from '.';

describe('Compare category to activeTags array', () => {
  test('Should return true -> value exists in activeTags', () => {
    const activeTags = ['financial', 'economy', 'transport'];
    const category = 'financial';
    const checkInput = compareTags(category, activeTags);
    expect(checkInput).toBeTruthy();
  });

  test('Should return true -> picked `all` value', () => {
    const activeTags = [DEFAULT_TAGS.ALL];
    const category = DEFAULT_TAGS.ALL;
    const checkInput = compareTags(category, activeTags);
    expect(checkInput).toBeTruthy();
  });

  test('Should return false -> value not exists', () => {
    const activeTags = ['financial', 'economy', 'transport'];
    const category = 'not-exists';
    const checkInput = compareTags(category, activeTags);
    expect(checkInput).toBeFalsy();
  });
});
