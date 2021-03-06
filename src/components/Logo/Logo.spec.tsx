import { render, screen } from '@testing-library/react';
import { Logo } from '.';

describe('Logo component', () => {
  it('renders correctly', () => {
    render(<Logo />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
