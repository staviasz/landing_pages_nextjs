import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyleRule('color', theme.colors.primaryColor);
    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge);
    expect(heading).toHaveStyleRule('text-transform', 'lowercase');
  });

  it('should render with white color', () => {
    renderTheme(<Heading colordark="light">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyleRule('color', theme.colors.white);
  });

  it('should render correct heading font-size small', () => {
    renderTheme(<Heading size="small">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.medium);
  });

  it('should render correct heading font-size medium', () => {
    renderTheme(<Heading size="medium">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.large);
  });

  it('should render correct heading font-size big', () => {
    renderTheme(<Heading size="big">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge);
  });

  it('should render correct heading font-size huge', () => {
    renderTheme(<Heading size="xhuge">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xhuge);
  });

  it('should render uppercase letters', () => {
    renderTheme(<Heading uppercase="uppercase">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyleRule('text-transform', 'uppercase');
  });

  it('should render correct headingelement', () => {
    const { container } = renderTheme(<Heading as="h5">texto</Heading>);
    const h5 = container.querySelector('h5');
    expect(h5).toBeInTheDocument();
  });
});
