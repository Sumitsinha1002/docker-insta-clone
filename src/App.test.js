import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  const linkElement = screen.getByText(/Add Pos/i);
  expect(linkElement).toBeInTheDocument();
});
