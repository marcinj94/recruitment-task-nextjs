import * as React from 'react';
import { getDatetimeParams } from 'utils';
import { Wrapper, StyledDate, StyledTime } from './style';

interface ReportDatetimeProps {
  timestamp: number;
}
export const ReportDatetime: React.FC<ReportDatetimeProps> = ({ timestamp }) => {
  const { day, month, year, hours, minutes } = getDatetimeParams(timestamp);
  return (
    <Wrapper>
      <StyledDate>
        {day}.{month}.{year}
      </StyledDate>
      <StyledTime>
        {hours}:{minutes}
      </StyledTime>
    </Wrapper>
  );
};
