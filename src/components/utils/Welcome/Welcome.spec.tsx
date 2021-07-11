import { render, screen } from '@testing-library/react';
import { Welcome } from '.';

describe('Welcome component', () => {
  it('renders correctly', () => {
    render(<Welcome />);

    expect(screen.getByText('Divirtam-se!')).toBeInTheDocument();
  });
});
