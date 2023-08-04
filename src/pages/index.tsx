import { loadPages } from '@/Api/load-pages';
import Home from '@/templates/Home';
import { DataProps } from '../Api/map-data';

interface IndexProps {
  data?: DataProps[];
}

export default function Index({ data = undefined }: IndexProps) {
  if (data) {
    return <Home data={data[0]} />;
  }
}

export const getStaticProps = async () => {
  let data;
  try {
    data = await loadPages(2);
  } catch (e) {
    //
  }

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
};
