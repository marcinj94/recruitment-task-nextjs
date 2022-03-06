/* eslint-disable object-curly-newline */
import { ReportLink, ReportLinkLabel, ReportLinkSize } from 'components/atoms';
import * as React from 'react';
import { FileElement } from 'state/types/reports';
import { formatFilesize } from 'utils';
import {
  ToggleButton,
  ButtonLabel,
  ButtonDescription,
  StyledIconUp,
  StyledIconDown,
  List,
  ListItem,
  Wrapper,
} from './style';

interface AccordionMenuProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  active: boolean;
  files: FileElement[];
}
export const AccordionMenu: React.FC<AccordionMenuProps> = ({ onClick, active, files }) => (
  <Wrapper>
    <ToggleButton onClick={onClick} active={active}>
      <ButtonLabel>
        <ButtonDescription>Pliki do pobrania ({files.length})</ButtonDescription>
        {active ? <StyledIconUp /> : <StyledIconDown />}
      </ButtonLabel>
    </ToggleButton>
    {active && (
      <List>
        {files.map(({ filename, filesize }) => (
          <ListItem key={`${filename}_${filesize}`}>
            <ReportLink href="#">
              <ReportLinkLabel>{formatFilesize(filesize)}</ReportLinkLabel>
              <ReportLinkSize>({`${filename}.pdf`})</ReportLinkSize>
            </ReportLink>
          </ListItem>
        ))}
      </List>
    )}
  </Wrapper>
);
