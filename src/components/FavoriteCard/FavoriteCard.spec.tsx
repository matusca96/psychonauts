import { fireEvent, render, screen } from '@testing-library/react';
import { FavoritesContext } from '../../contexts/FavoritesContext';
import { FavoriteCard } from '.';

const character = { _id: 'fake-char-id', name: 'John Doe' };
const favoriteCharacters = [character];

describe('FavoriteCard component', () => {
  it('renders correctly', () => {
    render(
      <FavoritesContext.Provider value={{ favoriteCharacters } as any}>
        <FavoriteCard character={character as any} />
      </FavoritesContext.Provider>,
    );

    expect(screen.getByText(character.name)).toBeInTheDocument();
  });

  it("removes character from favorite's list when click in remove button", () => {
    const removeFavoriteCharacter = jest.fn();

    render(
      <FavoritesContext.Provider
        value={{ favoriteCharacters, removeFavoriteCharacter } as any}
      >
        <FavoriteCard character={character as any} />
      </FavoritesContext.Provider>,
    );

    const button = screen.getByText('Remover');
    fireEvent.click(button);

    expect(removeFavoriteCharacter).toHaveBeenCalled();
  });
});
