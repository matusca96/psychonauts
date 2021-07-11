import { render, screen } from '@testing-library/react';
import { EmptyFavorites } from '.';

describe('EmptyFavorites component', () => {
  it('renders correctly', () => {
    render(<EmptyFavorites />);

    expect(
      screen.getByText('Sua lista de favoritos está vazia!'),
    ).toBeInTheDocument();
  });
});
