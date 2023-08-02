import { Base } from '.';
import { renderTheme } from '../../../src/styles/render-theme';
import { mBase } from './mockBasTemplate';

describe('<Base/>', () => {
  it('should render', () => {
    const { container } = renderTheme(<Base {...mBase} />);
    expect(container).toMatchSnapshot();
  });
});
