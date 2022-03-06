import { removeItemFromArray } from '.';

describe('Remove item from array of strings', () => {
  test('Should remove item from array', () => {
    const toRemove = 'Lord';
    let arr = ['The', toRemove, 'of', 'the', 'Rings'];
    expect(arr).toContain(toRemove);
    arr = removeItemFromArray(arr, toRemove);
    expect(arr).not.toContain(toRemove);
  });
  test("Shouldn't remove not exists element from array", () => {
    const element = 'The';
    let arr = ['Lord', 'of', 'the', 'Rings'];
    expect(arr).not.toContain(element);
    arr = removeItemFromArray(arr, element);
    expect(arr).not.toContain(element);
  });
});
