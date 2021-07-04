import { createContext, ReactNode, useState } from 'react';
import { api } from '../api/services';

interface CharacterContextData {
  searchCharacter: (query: string) => void;
  character: Character;
  isLoading: boolean;
}

interface CharacterProviderProps {
  children: ReactNode;
}

interface Character {
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
  const [character, setCharacter] = useState({} as Character);
  const [isLoading, setIsLoading] = useState(false);

  async function searchCharacter(query: string) {
    try {
      setIsLoading(true);
      const response = await api.get('characters', {
        params: {
          name: query,
        },
      });

      if (response.data) {
        setCharacter(response.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CharacterContext.Provider
      value={{ searchCharacter, character, isLoading }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
