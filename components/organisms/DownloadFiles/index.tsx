import * as React from 'react';
import { FileElement } from 'state-types/reports';
import { ReportLink } from 'components/atoms';
import { getFileinfo } from 'utils';
import { AccordionMenu } from 'components/organisms';

interface DownloadFilesProps {
  files: FileElement[];
}
export const DownloadFiles: React.FC<DownloadFilesProps> = ({ files }) => {
  if (files.length === 0) return null;
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {files.length === 1 && (
        <ReportLink href="#">{getFileinfo(files[0].filename, files[0].filesize)}</ReportLink>
      )}
      {files.length > 1 && <AccordionMenu onClick={handleToggle} active={isOpen} files={files} />}
    </>
  );
};
