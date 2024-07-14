import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';

test('renders the NotFound component', () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );

  const headingElement = screen.getByText(/404 - page not found/i);
  const linkElement = screen.getByRole('link', { name: /go back to home/i });

  expect(headingElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});
