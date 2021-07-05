import { createContext, ReactNode, useState } from 'react';
import { api } from '../api/services';

interface CharacterContextData {
  searchCharacter: (query: string) => void;
  character: Character;
  isLoading: boolean;
  notFound: boolean;
  isInFirstRender: boolean;
}

interface CharacterProviderProps {
  children: ReactNode;
}

export interface Character {
  gender: string;
  img: string;
  _id: string;
  name: string;
  psiPowers: Power[];
}

export interface Power {
  description: string;
  img: string;
  _id: string;
  name: string;
}

export const CharacterContext = createContext({} as CharacterContextData);

export function CharacterProvider({
  children,
}: CharacterProviderProps): JSX.Element {
  const [character, setCharacter] = useState({
    psiPowers: [],
  } as Character);
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isInFirstRender, setIsInFirstRender] = useState(true);

  async function searchCharacter(query: string) {
    try {
      setIsLoading(true);
      setNotFound(false);
      setIsInFirstRender(false);
      const response = await api.get('characters', {
        params: {
          name: query,
        },
      });

      if (response.data) {
        setCharacter(response.data);
      } else {
        setNotFound(true);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CharacterContext.Provider
      value={{
        searchCharacter,
        character,
        isLoading,
        notFound,
        isInFirstRender,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
