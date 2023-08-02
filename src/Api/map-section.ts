/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SectionProps {
  component: string;
  title: string;
  background: boolean;
  sectionId: string;
  html: string;
  gridText: [{ title: string; description: string }];
  gridImage: [{ srcImage: string; altText: string }];
  description: string;
  text: string;
  srcImage: string;
}

export const mapSections = (sections: any = []) => {
  return sections.map((section: any) => {
    if (section.__component === 'section.section-two-coluns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;
      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }
    return sections;
  });
};

export const mapSectionTwoColumns = (section: any = {}): SectionProps => {
  const {
    __component: component = '',
    title = '',
    html = '',
    gridText = [],
    gridImage = [],
    description = '',
    text = description,
    metadata: { section_id: sectionId = '', background = false } = false,
    image: {
      data: {
        attributes: { url: srcImage = '' },
      },
    },
  } = section;
  return {
    component,
    title,
    background,
    sectionId,
    html,
    gridText,
    gridImage,
    description,
    text,
    srcImage,
  };
};

export const mapSectionContent = (section: any = {}): SectionProps => {
  const {
    __component: component = '',
    title = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    content: html = '',
    gridText = [],
    gridImage = [],
    description = '',
    text = '',
    srcImage = '',
  } = section;
  return {
    component,
    title,
    background,
    sectionId,
    html,
    gridText,
    gridImage,
    description,
    text,
    srcImage,
  };
};

export const mapTextGrid = (section: any = {}): SectionProps => {
  const {
    __component: component = 'section.section-grid-text',
    title = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    html = '',
    text_grid: gridText = [],
    gridImage = [],
    description = '',
    text = '',
    srcImage = '',
  } = section;
  return {
    component: 'section.section-grid-text',
    title,
    background,
    sectionId,
    html,
    gridText: gridText.map((text: any) => {
      const { title = '', description = '' } = text;
      return {
        title,
        description,
      };
    }),
    gridImage,
    description,
    text,
    srcImage,
  };
};

export const mapImageGrid = (section: any = {}): SectionProps => {
  const {
    __component: component = 'section.section-grid-image',
    title = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    content: html = '',
    image_grid: gridImage = [],
    gridText = [],
    description = '',
    text = '',
    srcImage = '',
  } = section;
  return {
    component: 'section.section-grid-image',
    title,
    background,
    sectionId,
    html,
    gridText,
    gridImage: gridImage.map((img: any) => {
      const {
        image: { data },
      } = img;
      const {
        attributes: { url: srcImage = '', alternativeText: altText = '' },
      } = data[0];
      // console.log(srcImage, altText);
      return {
        srcImage,
        altText,
      };
    }),
    description,
    text,
    srcImage,
  };
};
