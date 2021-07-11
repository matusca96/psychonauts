import { render, screen } from '@testing-library/react';
import { CharacterContext } from '../../contexts/CharacterContext';
import { FavoritesContext } from '../../contexts/FavoritesContext';
import { CharacterCard } from '.';

describe('CharacterCard component', () => {
  it('renders correctly without powers', () => {
    const character = { _id: 'fake-char-id', name: 'John Doe', psiPowers: [] };
    const favoriteCharacters = [];

    render(
      <FavoritesContext.Provider value={{ favoriteCharacters } as any}>
        <CharacterContext.Provider value={{ character } as any}>
          <CharacterCard />
        </CharacterContext.Provider>
      </FavoritesContext.Provider>,
    );

    expect(screen.getByText('POWERS')).toBeInTheDocument();
  });

  it('renders correctly with powers', () => {
    const character = {
      _id: 'fake-char-id',
      name: 'John Doe',
      psiPowers: [{ _id: 'fake-power-id', name: 'fake-power' }],
    };
    const favoriteCharacters = [];

    render(
      <FavoritesContext.Provider value={{ favoriteCharacters } as any}>
        <CharacterContext.Provider value={{ character } as any}>
          <CharacterCard />
        </CharacterContext.Provider>
      </FavoritesContext.Provider>,
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
