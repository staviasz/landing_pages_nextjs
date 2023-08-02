/* eslint-disable @typescript-eslint/no-explicit-any */
export interface MenuProps {
  newTab: boolean;
  text: string;
  link: string;
  srcImage: string;
  links: LinkProps[];
}

export const mapMenu = (menuData: any = {}): MenuProps => {
  const {
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
    image: { data: { attributes: { url: srcImage = '' } = '' } = '' } = '',
    menu_links: links = [],
  } = menuData;
  return {
    newTab,
    text,
    link,
    srcImage,
    links: mapMenuLinks(links),
  };
};

interface LinkProps {
  target: string;
  children: string;
  href: string;
}

export const mapMenuLinks = (links: any[] = [{}]): LinkProps[] => {
  return links.map((item: any) => {
    const {
      open_in_new_tab = false,
      link_text: children = '',
      url: href = '',
    } = item;
    const target = open_in_new_tab ? '_blank' : '_self';
    return {
      target,
      children,
      href,
    };
  });
};
