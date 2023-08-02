import { mapData } from './map-data';
import data from './map-data-mock.json';

describe('map-data', () => {
  it('should map data even if there is no data', () => {
    const pageData = mapData()[0];
    expect(pageData.footerHtml).toBe('');
    expect(pageData.title).toBe('');
    expect(pageData.slug).toBe('');
  });

  it('should map data if there are data', () => {
    const pageData = mapData(data)[0];
    expect(pageData.footerHtml).toBe('footer_text');
    expect(pageData.title).toBe('title');
    expect(pageData.slug).toBe('slug');
  });
});
