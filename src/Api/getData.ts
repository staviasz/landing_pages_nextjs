import { mapData } from '@/Api/map-data';
export const getData = async () => {
  const data = await fetch(
    `http://localhost:1337/api/pages/?slug=landing-page&populate=deep`,
  );
  const json = await data.json();
  const { attributes } = json.data[0];
  const pageData = mapData([attributes]);
  console.log(pageData);

  return pageData;
};

// export const getStaticProps = async () => {
//   return {
//     props:data[0]
//   }
// }
