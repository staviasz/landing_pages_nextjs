import { screen } from '@testing-library/react';
import { MLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<MLink/>', () => {
  it('should render', () => {
    renderTheme(<MLink href="http://localhost">Children</MLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render open in new tab', () => {
    renderTheme(
      <MLink href="http://localhost" target="_blank">
        Children
      </MLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should mach', () => {
    renderTheme(
      <MLink href="http://localhost" target="_blank">
        Children
      </MLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toMatchSnapshot();
  });
});
