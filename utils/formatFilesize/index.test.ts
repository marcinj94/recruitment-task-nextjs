import { formatFilesize } from '.';

describe('Generate filesize format', () => {
  test('Should convert number to string with `kB` info', () => {
    const filesize = 500;
    const formatted = formatFilesize(filesize);
    expect(formatted).toContain('kB');
  });
});
