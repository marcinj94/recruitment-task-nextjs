---
to: <%= absPath %>/index.tsx
---
import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';
import { PageWrapper } from './style';

// example
interface ResponseDataProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const getServerSideProps = async () => {
  try {
    const { data } = await axios.get<ResponseDataProps>(
      'https://jsonplaceholder.typicode.com/todos/1',
    );
    return {
      props: data,
    };
  } catch (error) {
    console.log('something went wrong with getting data from API... 🔥');
    const props = {
      data: null,
      error: true,
      isFetched: false,
    };
    return {
      props,
    };
  }
};

interface CurrentPageProps {
  data: null | ResponseDataProps;
  error: boolean;
  isFetched: boolean;
}

const CurrentPage: NextPage<CurrentPageProps> = (props) => {
  // props
  const { data, error, isFetched } = props;
  console.log('data:', data);
  console.log('error:', error);
  console.log('isFetched:', isFetched);
  // local state
  const [localState, setLocalState] = React.useState<null | string[]>(null);

  console.log('localState:', localState);
  console.log('setLocalState:', setLocalState);

  return (
    <>
      <Head>
        <title>Page testowa</title>
        <meta name="description" content="Simple description." />
      </Head>
      <PageWrapper>{localState}</PageWrapper>
    </>
  );
};

export default CurrentPage;

