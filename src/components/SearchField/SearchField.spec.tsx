import { fireEvent, render, screen } from '@testing-library/react';
import { CharacterContext } from '../../contexts/CharacterContext';
import { SearchField } from '.';

const character = {
  name: 'John Doe',
};

describe('SearchField component', () => {
  it('renders correctly', () => {
    render(
      <CharacterContext.Provider value={{ character } as any}>
        <SearchField />
      </CharacterContext.Provider>,
    );

    expect(screen.getByText('Pesquisar')).toBeInTheDocument();
  });

  it('executes function when click in button', () => {
    const searchCharacter = jest.fn();

    render(
      <CharacterContext.Provider value={{ character, searchCharacter } as any}>
        <SearchField />
      </CharacterContext.Provider>,
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'fake-text' } });

    const button = screen.getByText('Pesquisar');
    fireEvent.click(button);

    expect(searchCharacter).toHaveBeenCalled();
  });

  it('keyDown event fires correctly', () => {
    const searchCharacter = jest.fn();

    render(
      <CharacterContext.Provider value={{ character, searchCharacter } as any}>
        <SearchField />
      </CharacterContext.Provider>,
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, 'fake-text');
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(searchCharacter).toHaveBeenCalled();
  });

  it('enable button when change text', () => {
    render(
      <CharacterContext.Provider value={{ character } as any}>
        <SearchField />
      </CharacterContext.Provider>,
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'fake-text' } });

    expect(screen.getByText('Pesquisar')).not.toBeDisabled();
  });
});
