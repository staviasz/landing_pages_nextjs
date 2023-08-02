/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { fireEvent, screen } from '@testing-library/react';
import { Menu } from '.';
import { renderTheme } from '../../styles/render-theme';

import { links } from './mockLinks';

const logoData = {
  text: 'Logo',
  link: '#target',
  srcImage: 'img/png',
};

describe('<Menu />', () => {
  it('should render Logo and Main Menu Nav', () => {
    const { container } = renderTheme(
      <Menu links={links} logoData={logoData} />,
    );
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render menu mobile and button for open and close the menu', () => {
    renderTheme(<Menu links={links} logoData={logoData} />);

    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    fireEvent.click(button);

    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
  });

  it('should not render links', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);
    expect(
      //@ts-ignore
      screen.queryByRole('navigation', { name: 'Main menu' }).firstChild,
    ).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
