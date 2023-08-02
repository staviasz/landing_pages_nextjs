import { mapMenu, mapMenuLinks } from './map-menu';
import data from './map-menu-mock.json';

describe('map-menu', () => {
  it('should map data even if there is no data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.link).toBe('');
    expect(menu.srcImage).toBe('');
  });

  it('should map menu to match keys and values required', () => {
    const menu = mapMenu(data);
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('page_teste');
    expect(menu.link).toBe('#');
    expect(menu.srcImage).toBe('a.jpg');
    expect(menu.links[0].target).toBe('_self');
    expect(menu.links[0].children).toBe('link_1');
    expect(menu.links[0].href).toBe('#home');
  });

  it('should return an empty array if no links', () => {
    const links = mapMenuLinks();
    expect(links[0].target).toBe('_self');
    expect(links[0].children).toBe('');
    expect(links[0].href).toBe('');
  });
});
