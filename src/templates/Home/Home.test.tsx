import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '.';
import { renderTheme } from '../../../src/styles/render-theme';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(
      <BrowserRouter>
        <Routes>
          <Route path="*" Component={Home} />
        </Routes>
      </BrowserRouter>,
    );
  });
});
