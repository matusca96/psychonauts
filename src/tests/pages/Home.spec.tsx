import { render, screen } from '@testing-library/react';
import { CharacterContext } from '../../contexts/CharacterContext';
import { FavoritesContext } from '../../contexts/FavoritesContext';
import Home from '../../pages';

const character = {
  name: 'John Doe',
  psiPowers: [],
};

describe('Home page', () => {
  it('renders correctly in first time', () => {
    const favoriteCharacters = [];
    const isInFirstRender = true;

    render(
      <FavoritesContext.Provider value={{ favoriteCharacters } as any}>
        <CharacterContext.Provider
          value={{ isInFirstRender, character } as any}
        >
          <Home />
        </CharacterContext.Provider>
      </FavoritesContext.Provider>,
    );

    expect(screen.getByText('Meus favoritos')).toBeInTheDocument();
  });

  it('renders correctly while loading', () => {
    const favoriteCharacters = [];
    const isLoading = true;

    render(
      <FavoritesContext.Provider value={{ favoriteCharacters } as any}>
        <CharacterContext.Provider value={{ isLoading, character } as any}>
          <Home />
        </CharacterContext.Provider>
      </FavoritesContext.Provider>,
    );

    expect(screen.getByText('Meus favoritos')).toBeInTheDocument();
  });

  it('renders correctly when not found a character', () => {
    const favoriteCharacters = [];
    const notFound = true;

    render(
      <FavoritesContext.Provider value={{ favoriteCharacters } as any}>
        <CharacterContext.Provider value={{ notFound, character } as any}>
          <Home />
        </CharacterContext.Provider>
      </FavoritesContext.Provider>,
    );

    expect(screen.getByText('Meus favoritos')).toBeInTheDocument();
  });

  it('renders correctly when a character is found', () => {
    const favoriteCharacters = [];

    render(
      <FavoritesContext.Provider value={{ favoriteCharacters } as any}>
        <CharacterContext.Provider value={{ character } as any}>
          <Home />
        </CharacterContext.Provider>
      </FavoritesContext.Provider>,
    );

    expect(screen.getByText('Meus favoritos')).toBeInTheDocument();
  });

  it("renders correctly when favorite's list isn't empty", () => {
    const favoriteCharacters = [character];

    render(
      <FavoritesContext.Provider value={{ favoriteCharacters } as any}>
        <CharacterContext.Provider value={{ character } as any}>
          <Home />
        </CharacterContext.Provider>
      </FavoritesContext.Provider>,
    );

    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });
});
