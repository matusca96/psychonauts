import { fireEvent, render, screen } from '@testing-library/react';
import { useContext } from 'react';
import {
  FavoritesProvider,
  FavoritesContext,
} from '../../contexts/FavoritesContext';

describe('FavoritesContext component', () => {
  it('renders correctly', () => {
    render(
      <FavoritesProvider>
        <div>Psychonauts</div>
      </FavoritesProvider>,
    );

    expect(screen.getByText('Psychonauts')).toBeInTheDocument();
  });

  it("adds new character to favorite's list", () => {
    function TestComponent() {
      const { favoriteCharacters, addNewFavoriteCharacter } =
        useContext(FavoritesContext);

      const character = {
        _id: 'fake-char-id',
        name: 'John Doe',
      };

      return (
        <>
          <button
            type="button"
            onClick={() => addNewFavoriteCharacter(character as any)}
          >
            Adicionar
          </button>

          <ul>
            {favoriteCharacters.map((char) => (
              <li key={char._id}>{char.name}</li>
            ))}
          </ul>
        </>
      );
    }

    render(
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>,
    );

    const button = screen.getByText('Adicionar');
    fireEvent.click(button);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it("stops if character is already in favorite's list", () => {
    function TestComponent() {
      const { favoriteCharacters, addNewFavoriteCharacter } =
        useContext(FavoritesContext);

      const character = {
        _id: 'fake-char-id',
        name: 'John Doe',
      };

      return (
        <>
          <button
            type="button"
            onClick={() => addNewFavoriteCharacter(character as any)}
          >
            Adicionar
          </button>

          <ul>
            {favoriteCharacters.map((char) => (
              <li key={char._id}>{char.name}</li>
            ))}
          </ul>
        </>
      );
    }

    render(
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>,
    );

    const button = screen.getByText('Adicionar');
    fireEvent.click(button);
    fireEvent.click(button);

    expect(screen.getByRole('list').childElementCount).toBe(1);
  });

  it("removes character from favorite's list", () => {
    function TestComponent() {
      const {
        favoriteCharacters,
        addNewFavoriteCharacter,
        removeFavoriteCharacter,
      } = useContext(FavoritesContext);

      const character = {
        _id: 'fake-char-id',
        name: 'John Doe',
      };

      return (
        <>
          <button
            type="button"
            onClick={() => addNewFavoriteCharacter(character as any)}
          >
            Adicionar
          </button>

          <button
            type="button"
            onClick={() => removeFavoriteCharacter(character._id)}
          >
            Remover
          </button>

          <ul>
            {favoriteCharacters.map((char) => (
              <li key={char._id}>{char.name}</li>
            ))}
          </ul>
        </>
      );
    }

    render(
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>,
    );

    const addButton = screen.getByText('Adicionar');
    fireEvent.click(addButton);

    const removeButton = screen.getByText('Remover');
    fireEvent.click(removeButton);

    expect(screen.getByRole('list').childElementCount).toBe(0);
  });
});
