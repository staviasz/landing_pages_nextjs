import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DataProps, mapData } from '../../Api/map-data';
import { GridContent } from '../../components/GridContent';
import { GridGalery } from '../../components/GridGalery';
import { GridText } from '../../components/GridText';
import { GridTwoColumn } from '../../components/GridTwoColumns';
import { Loading } from '../../components/Loading';
import { Base } from '../base';


export default function Home() {
  const [dataPage, setDataPage] = useState<DataProps>();
  const [isLoading, setisLoading] = useState<boolean>(true);
  const location = useLocation();
  const isMounted = useRef(true);

  useEffect(() => {
    const pathName = location.pathname.replace(/[^a-z0-9-_]/gi, '-');
    const slug = pathName ? pathName : 'landing-page';
    const load = async () => {
      try {
        const data = await fetch(
          `http://localhost:1337/api/pages/?slug=${slug}&populate=deep`,
        );
        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        setDataPage(() => pageData[0]);
      } catch (e) {
        setDataPage(undefined);
      } finally {
        setisLoading(false);
      }
    };
    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, [location]);

  useEffect(() => {
    if (dataPage === undefined && isLoading === true) {
      document.title = 'Carregando...';
    } else if (dataPage === undefined && isLoading === false) {
      document.title = 'Pagina não encontrada';
    } else {
      if (dataPage) {
        document.title = `Erick - ${dataPage.slug}`;
      }
    }
  }, [isLoading, dataPage]);

  if (isLoading === true) {
    return <Loading />;
  }
  if (dataPage === undefined) {
    return <h1>No data</h1>;
  }

  const { menu, sections, footerHtml, slug } = dataPage;
  const { links, text, link, srcImage } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImage }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;
        console.log(section);

        if (component === 'section.section-two-coluns') {
          return <GridTwoColumn key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          const { gridText } = section;
          return <GridText key={key} grid={gridText} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          const { gridImage } = section;
          console.log(gridImage);

          return <GridGalery key={key} grid={gridImage} {...section} />;
        }
      })}
    </Base>
  );
}
