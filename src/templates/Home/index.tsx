import { DataProps } from '../..//Api/map-data';
import { GridContent } from '../../components/GridContent';
import { GridGalery } from '../../components/GridGalery';
import { GridText } from '../../components/GridText';
import { GridTwoColumn } from '../../components/GridTwoColumns';
import { Base } from '../base';

interface IndexProps {
  data?: DataProps;
}

export default function Home({ data }: IndexProps) {
  if (!data) {
    return <h1>No data</h1>;
  }

  const { menu, sections, footerHtml, slug } = data;
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

          return <GridGalery key={key} grid={gridImage} {...section} />;
        }
      })}
    </Base>
  );
}
