/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable object-curly-newline */
import { ErrorMsg } from 'components/atoms';
import { FilterBar, Header, ReportsCollection } from 'components/organisms';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';
import {
  // useDispatch,
  useSelector,
} from 'react-redux';
import { useAppDispatch, useAppSelector } from 'state/hooks';
// import { fetchReports } from 'state/reducers/reports';
import { RootState } from 'state/rootReducer';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';
import { Main } from './style';

const StyledButton = styled.div`
  border: 3px solid red;
  border-radius: 30px 20px;
`;

// ... example how to configure Next.js app with redux toolkit
// https://github.com/vercel/next.js/tree/canary/examples/with-redux

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  console.log('dispatch:', dispatch);
  const { error, isFetched } = useAppSelector((state: RootState) => state.reports);
  console.log('error:', error);
  console.log('isFetched:', isFetched);
  // const dispatch = useDispatch();
  // React.useEffect(() => {
  // if (!isFetched) dispatch(fetchReports());
  // }, []);
  return (
    <>
      <Header />
      {error && <ErrorMsg description="Brak danych do wyświetlenia..." />}
      {/* {!error && isFetched && ( */}
      {/* <Main> */}
      {/* <FilterBar /> */}
      {/* <ReportsCollection /> */}
      {/* </Main> */}
      {/* )} */}
    </>
  );
};

export default Home;
