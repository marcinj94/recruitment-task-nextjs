import { formatFilename } from '.';

describe('Generate filename with .pdf text', () => {
  test('Should convert filename to string with `.pdf` info', () => {
    const filename = 'myPortfolio';
    const formatted = formatFilename(filename);
    expect(formatted).toEqual(`${filename}.pdf`);
  });
});
