import { fireEvent, render, screen } from '@testing-library/react';
import { CharacterContext } from '../../../contexts/CharacterContext';
import { FavoritesContext } from '../../../contexts/FavoritesContext';
import { Header } from '.';

describe('CharacterCard Header component', () => {
  it('renders correctly', () => {
    const character = { _id: 'fake-char-id', name: 'John Doe' };
    const favoriteCharacters = [character];

    render(
      <FavoritesContext.Provider value={{ favoriteCharacters } as any}>
        <CharacterContext.Provider value={{ character } as any}>
          <Header />
        </CharacterContext.Provider>
      </FavoritesContext.Provider>,
    );

    expect(screen.getByText(character.name)).toBeInTheDocument();
  });

  it('adds a new character when click in star button', () => {
    const character = { _id: 'fake-char-id', name: 'John Doe' };
    const favoriteCharacters = [];

    const addNewFavoriteCharacter = jest.fn();

    render(
      <FavoritesContext.Provider
        value={{ favoriteCharacters, addNewFavoriteCharacter } as any}
      >
        <CharacterContext.Provider value={{ character } as any}>
          <Header />
        </CharacterContext.Provider>
      </FavoritesContext.Provider>,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(addNewFavoriteCharacter).toHaveBeenCalled();
  });
});
