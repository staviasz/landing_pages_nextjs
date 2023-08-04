/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { loadPages } from '@/Api/load-pages';
import { DataProps } from '@/Api/map-data';
import Home from '@/templates/Home';

interface HomeProps {
  data: DataProps;
}

export const getStaticPaths = async () => {
  const paths = (await loadPages()).map((page) => {
    return {
      params: {
        id: page.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx: any) => {
  let data = null;
  try {
    data = await loadPages(Number(ctx.params.id));
    data = data[0];
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

interface IndexProps {
  data?: DataProps;
}

export default function Page({ data }: IndexProps) {
  return <Home data={data} />;
}
