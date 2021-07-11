import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from '.';

describe('Input component', () => {
  it('renders correctly', () => {
    render(<Input onClear={() => {}} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders correctly when value is not empty', () => {
    render(<Input value="fake-text" onChange={() => {}} onClear={() => {}} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('clears input field when click in clear button', () => {
    const mockedOnClear = jest.fn();

    render(
      <Input value="fake-text" onChange={() => {}} onClear={mockedOnClear} />,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockedOnClear).toHaveBeenCalled();
  });

  it('focus correctly', () => {
    render(<Input onClear={() => {}} />);

    const input = screen.getByRole('textbox');
    input.focus();

    expect(input).toHaveFocus();
  });

  it('blurs correctly', () => {
    render(<Input onClear={() => {}} />);

    const input = screen.getByRole('textbox');
    input.focus();
    input.blur();

    expect(input).not.toHaveFocus();
  });
});
