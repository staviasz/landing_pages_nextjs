/* eslint-disable @typescript-eslint/no-explicit-any */
import { mapMenu, MenuProps } from './map-menu';
import { mapSections, SectionProps } from './map-section';

export interface DataProps {
  id: number;
  title: string;
  slug: string;
  menu: MenuProps;
  sections: SectionProps[];
  footerHtml: string;
}

export const mapData = (pagesData: any[] = [{}]): DataProps[] => {
  return pagesData.map((data) => {
    const {
      id = null,
      attributes: {
        footer_text: footerHtml = '',
        title = '',
        slug = '',
        sections = [],
        menu = {},
      },
    } = data;
    return {
      id,
      footerHtml,
      title,
      slug,
      menu: mapMenu(menu),
      sections: mapSections(sections),
    };
  });
};
