import { screen } from '@testing-library/react';
import { GridContent } from '.';
import { renderTheme } from '../../styles/render-theme';

import { theme } from '../../styles/theme';
import { htmlContent } from './mockHtmlContent';

describe('<GridContent />', () => {
  it('should render grid content', () => {
    const { container } = renderTheme(<GridContent {...htmlContent} />);
    expect(container).toMatchSnapshot();
  });

  it('should render grid content', () => {
    const { container } = renderTheme(<GridContent {...htmlContent} />);
    expect(container).toMatchSnapshot();
  });

  it('should have title "light" if background are "dark"', () => {
    renderTheme(<GridContent {...htmlContent} />);
    const heading = screen.getByRole('heading', { name: htmlContent.title });
    expect(heading).toHaveStyleRule('color', theme.colors.primaryColor);
  });

  it('should have title "light" if background are "dark"', () => {
    renderTheme(<GridContent {...htmlContent} background={true} />);
    const heading = screen.getByRole('heading', { name: htmlContent.title });
    expect(heading).toHaveStyleRule('color', theme.colors.white);
  });
});
