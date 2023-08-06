import { url } from '../config/url-config';
import { mapData } from './map-data';

export const loadPages = async (id?: number) => {
  if (!id) {
    const urlReq = `${url}/pages/?populate=deep`;
    const raw = await fetch(urlReq);
    const json = await raw.json();
    const data = mapData(json.data);

    return data;
  }
  const urlReq = `${url}/pages/${id}?&populate=deep`;

  const raw = await fetch(urlReq);
  const json = await raw.json();
  const data = mapData([json.data]);

  return data;
};
