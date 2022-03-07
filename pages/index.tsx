import * as React from 'react';
import { ErrorMsg } from 'components/atoms';
import { FilterBar, Header, ReportsCollection } from 'components/organisms';
import type { NextPage } from 'next';
import { DataElement, DEFAULT_TAGS } from 'state-types/reports';
import jsonData from 'public/data.json';
import Head from 'next/head';
import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

interface HomeProps {
  data: null | DataElement[];
  isFetched: boolean;
  error: boolean;
}

export const getServerSideProps = async () => {
  try {
    // ... nie chce mi zadzialac pobieranie z pliku przy pomocy axios.get
    // const { data } = await axios.get<DataElement[]>('data.json');
    // z fake API dziala bez problemu
    // const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    const data = jsonData;
    // throw new Error();
    const props: HomeProps = {
      data,
      isFetched: true,
      error: false,
    };
    return {
      props,
    };
  } catch (error) {
    console.log('something went wrong with getting data from JSON file... 🔥');
    const props: HomeProps = {
      data: null,
      error: true,
      isFetched: false,
    };
    return {
      props,
    };
  }
};

const Home: NextPage<HomeProps> = (props) => {
  const { error, isFetched, data } = props;
  // filter params
  const [filterSelect, setFilterSelect] = React.useState('');
  const [filterInput, setFilterInput] = React.useState('');
  const [activeTags, setActiveTags] = React.useState<string[]>([DEFAULT_TAGS.ALL]);

  return (
    <>
      <Head>
        <title>Next.js task - Raporty</title>
        <meta name="description" content="Recruitment task written in Next.js technology React ." />
      </Head>
      <Header />
      {error && <ErrorMsg description="Brak danych do wyświetlenia..." />}
      {!error && isFetched && data && (
        <Main>
          <FilterBar
            data={data}
            setFilterInput={setFilterInput}
            setFilterSelect={setFilterSelect}
            activeTags={activeTags}
            setActiveTags={setActiveTags}
          />
          <ReportsCollection
            data={data}
            filter={{
              select: filterSelect,
              input: filterInput,
            }}
            activeTags={activeTags}
          />
        </Main>
      )}
    </>
  );
};

export default Home;
