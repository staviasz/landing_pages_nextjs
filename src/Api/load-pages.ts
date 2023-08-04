import { mapData } from './map-data';

export const loadPages = async (id?: number) => {
  if (!id) {
    const url = `http://localhost:1337/api/pages/?populate=deep`;
    const raw = await fetch(url);
    const json = await raw.json();
    const data = mapData(json.data);

    return data;
  }
  const url = `http://localhost:1337/api/pages/${id}?&populate=deep`;

  const raw = await fetch(url);
  const json = await raw.json();
  const data = mapData([json.data]);

  return data;
};
