import { render, screen } from '@testing-library/react';
import { CharacterNotFound } from '.';

describe('CharacterNotFound component', () => {
  it('renders correctly', () => {
    render(<CharacterNotFound />);

    expect(screen.getByText('Oops!')).toBeInTheDocument();
  });
});
