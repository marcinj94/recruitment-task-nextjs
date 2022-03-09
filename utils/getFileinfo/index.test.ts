import { getFileinfo } from '.';

describe('Generate file info -> filename and filesize', () => {
  test('Should convert file params into specific string', () => {
    const filename = 'myFilename';
    const filesize = 500;
    const formatted = getFileinfo(filename, filesize);
    expect(formatted).toEqual(`${filename}.pdf (${filesize} kB)`);
  });
});
