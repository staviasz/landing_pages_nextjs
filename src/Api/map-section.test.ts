import {
  mapImageGrid,
  mapSectionContent,
  mapSectionTwoColumns,
  mapSections,
  mapTextGrid,
} from './map-section';
import mockSContent from './mockSections/map-section-content.json';
import mockGrid from './mockSections/map-section-grid.json';
import mockTwoColumns from './mockSections/map-section-two-columns.json';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections(undefined);
    expect(data).toEqual([]);
  });

  it('should render sections with correct data', () => {
    // const map = mapSections([dataPage]);
    const data = mapSections([mockGrid]);
    expect(data[0].component).toBe('section.section-grid-text');
  });

  it('should text invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);
    expect(withNoTextOrImageGrid).toEqual([
      [{ __component: 'section.section-grid' }],
    ]);
  });

  it('should map sections two-columns', () => {
    const data = mapSectionTwoColumns(mockTwoColumns);
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.srcImage).toBe('a.svg');
    expect(data.text).toBe('To wrap up January');
    expect(data.title).toBe('January brings us Firefox 85');
  });

  it('should map section content if no data', () => {
    const section = mapSectionContent();
    expect(section.background).toBe(false);
    expect(section.component).toBe('');
    expect(section.sectionId).toBe('');
    expect(section.title).toBe('');
    expect(section.html).toBe('');
  });

  it('should map section content', () => {
    const section = mapSectionContent(mockSContent);
    expect(section.background).toBe(false);
    expect(section.component).toBe('section.section-content');
    expect(section.sectionId).toBe('intro');
    expect(section.title).toBe('news coverage and some surprises');
    expect(section.html).toBe(
      '<p>The release of Apple Silicon-based Macs at the end of last year.</p>',
    );
  });

  it('should map grid-text if no exits data', () => {
    const section = mapTextGrid(undefined);
    expect(section.background).toBe(false);
    expect(section.component).toBe('section.section-grid-text');
    expect(section.sectionId).toBe('');
    expect(section.title).toBe('');
    expect(section.description).toBe('');
    expect(section.gridText).toEqual([]);
  });

  it('should map grid-text', () => {
    const section = mapTextGrid(mockGrid);
    expect(section.background).toBe(true);
    expect(section.component).toBe('section.section-grid-text');
    expect(section.sectionId).toBe('section-grid-image');
    expect(section.title).toBe('section grid image');
    expect(section.description).toBe('TESTE SECTION GRID IMAGE');
    expect(section.gridText[0].title).toBe('grid 1');
    expect(section.gridText[0].description).toBe('TESTE SECTION GRID');
  });

  it('should map grid-image if no exits data', () => {
    const section = mapImageGrid(undefined);
    expect(section.background).toBe(false);
    expect(section.component).toBe('section.section-grid-image');
    expect(section.sectionId).toBe('');
    expect(section.title).toBe('');
    expect(section.gridImage).toEqual([]);
  });

  it('should map grid-image with data', () => {
    const section = mapImageGrid(mockGrid);
    expect(section.background).toBe(true);
    expect(section.component).toBe('section.section-grid-image');
    expect(section.sectionId).toBe('section-grid-image');
    expect(section.title).toBe('section grid image');
    expect(section.gridImage[0].srcImage).toBe('a.jpg');
    expect(section.gridImage[0].altText).toBe('Tela de notebook com Webull');
  });
});
