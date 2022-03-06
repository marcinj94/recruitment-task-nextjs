/* eslint-disable object-curly-newline */
import {
  ReportCategory,
  ReportDatetime,
  WhiteSection,
  ReportTitle,
  ReportDescription,
  ReportLink,
  NoDataMsg,
} from 'components/atoms';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'state/rootReducer';
import { DownloadFiles } from 'components/organisms/DownloadFiles';
import { compareYear, compareTags, compareInput } from 'utils';
import { List, ListItem, LeftWrapper, RightWrapper, ActionWrapper } from './style';

export const ReportsCollection: React.FC = () => {
  const {
    data,
    filter: { input, select },
    activeTags,
  } = useSelector((state: RootState) => state.reports);

  const filteredData = React.useMemo(() => {
    if (data.length > 0) {
      return data.filter((report) => {
        const checkYear = compareYear(report.date, select);
        const checkTags = compareTags(report.category, activeTags);
        const checkInput = compareInput(report, input);
        return checkYear && checkTags && checkInput;
      });
    }
    return [];
  }, [data, input, select, activeTags]);

  return (
    <WhiteSection>
      {filteredData.length > 0 ? (
        <List>
          {filteredData.map((report) => (
            <ListItem key={report.date}>
              <LeftWrapper>
                <ReportDatetime timestamp={report.date} />
                <ReportCategory category={report.category} />
              </LeftWrapper>
              <RightWrapper>
                <ReportTitle>{report.title}</ReportTitle>
                <ReportDescription>{report.description}</ReportDescription>
                <ActionWrapper>
                  <ReportLink href="#">Zobacz raport</ReportLink>
                  <DownloadFiles files={report.files} />
                </ActionWrapper>
              </RightWrapper>
            </ListItem>
          ))}
        </List>
      ) : (
        <NoDataMsg>Brak danych do wyświetlenia...</NoDataMsg>
      )}
    </WhiteSection>
  );
};
