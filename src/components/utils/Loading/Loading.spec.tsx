import { render, screen } from '@testing-library/react';
import { Loading } from '.';

describe('Loading component', () => {
  it('renders correctly', () => {
    render(<Loading />);

    expect(screen.getByAltText('Loading')).toBeInTheDocument();
  });
});
