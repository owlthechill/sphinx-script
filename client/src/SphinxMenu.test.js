import { render, screen } from '@testing-library/react';
import SphinxMenu from './SphinxMenu';

test('renders learn react link', () => {
  render(<SphinxMenu />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
