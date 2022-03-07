import { formatFilename } from 'utils/formatFilename';
import { formatFilesize } from 'utils/formatFilesize';

export const getFileinfo = (filename: string, filesize: number) => {
  const formattedFilename = formatFilename(filename);
  const formattedFilesize = formatFilesize(filesize);
  return `${formattedFilename} (${formattedFilesize})`;
};
