import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink/>', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Hello world" />);
    expect(
      screen.getByRole('heading', { name: 'Hello world' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Hello world' })).toHaveAttribute(
      'href',
      '#target',
    );
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Hello world" srcImage="image.jpg" />,
    );
    expect(screen.getByAltText('Hello world')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Hello world" srcImage="image.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
