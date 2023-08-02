/* eslint-disable @typescript-eslint/no-explicit-any */
import { mapMenu, MenuProps } from './map-menu';
import { mapSections, SectionProps } from './map-section';

// interface MenuProps {
//   [key: string]: string | boolean | { [key: string]: string | boolean };
// }

// interface SectionProps {
//   [key: string]: string | boolean | [{ [key: string]: string | boolean }];
// }

export interface DataProps {
  title: string;
  slug: string;
  menu: MenuProps;
  sections: SectionProps[];
  footerHtml: string;
}

export const mapData = (pagesData: any[] = [{}]): DataProps[] => {
  return pagesData.map((data) => {
    const {
      footer_text: footerHtml = '',
      title = '',
      slug = '',
      sections = [],
      menu = {},
    } = data;
    return {
      title,
      slug,
      menu: mapMenu(menu),
      sections: mapSections(sections),
      footerHtml,
    };
  });
};
