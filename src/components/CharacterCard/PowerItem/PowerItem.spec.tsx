import { render, screen } from '@testing-library/react';
import { PowerItem } from '.';

const power = {
  _id: 'fake-power-id',
  name: 'fake-power',
  description: 'fake-description',
  img: 'fake-img',
};

describe('PowerItem component', () => {
  it('renders correctly', () => {
    render(<PowerItem power={power} />);

    expect(screen.getByText(power.name)).toBeInTheDocument();
  });
});
