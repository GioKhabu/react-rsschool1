import { fireEvent, render, screen } from '@testing-library/react';
import Header from './header';

test('renders the Header component', () => {
  const mockOnSearch = jest.fn();

  render(<Header onSearch={mockOnSearch} searchTerm="" />);

  const inputElement = screen.getByPlaceholderText(/search.../i);
  const buttonElement = screen.getByRole('button', { name: /search/i });

  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('calls onSearch with the correct term when search button is clicked', () => {
  const mockOnSearch = jest.fn();

  render(<Header onSearch={mockOnSearch} searchTerm="" />);

  const inputElement = screen.getByPlaceholderText(/search.../i);
  const buttonElement = screen.getByRole('button', { name: /search/i });

  fireEvent.change(inputElement, { target: { value: 'Luke Skywalker' } });
  fireEvent.click(buttonElement);

  expect(mockOnSearch).toHaveBeenCalledWith('Luke Skywalker');
});
