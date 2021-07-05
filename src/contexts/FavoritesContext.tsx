import { createContext, ReactNode, useState } from 'react';
import { Character } from './CharacterContext';

interface FavoritesContextData {
  favoriteCharacters: Character[];
  addNewFavoriteCharacter: (char: Character) => void;
  removeFavoriteCharacter: (id: string) => void;
}

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesContext = createContext({} as FavoritesContextData);

export function FavoritesProvider({
  children,
}: FavoritesProviderProps): JSX.Element {
  const [favoriteCharacters, setFavoriteCharacters] = useState<Character[]>([]);

  function addNewFavoriteCharacter(character: Character) {
    const exists = favoriteCharacters.some(
      (char) => char._id === character._id,
    );

    if (!exists) {
      setFavoriteCharacters([...favoriteCharacters, character]);
    }
  }

  function removeFavoriteCharacter(id: string) {
    setFavoriteCharacters((prevState) =>
      prevState.filter((char) => char._id !== id),
    );
  }

  return (
    <FavoritesContext.Provider
      value={{
        favoriteCharacters,
        addNewFavoriteCharacter,
        removeFavoriteCharacter,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
