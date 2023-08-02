import { screen } from '@testing-library/react';
import { TextContent } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<TextContent/>', () => {
  it('should render', () => {
    renderTheme(<TextContent>children</TextContent>);
    expect(screen.getByText('children')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextContent>children</TextContent>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
