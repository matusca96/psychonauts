import { KeyboardEvent, useContext, useState } from 'react';
import { CharacterContext } from '../../contexts/CharacterContext';
import { Input } from '../Input';
import { Container } from './styles';

export function SearchField(): JSX.Element {
  const [query, setQuery] = useState('');

  const { searchCharacter, isLoading } = useContext(CharacterContext);

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      searchCharacter(query);
    }
  }

  return (
    <Container>
      <Input
        onClear={() => setQuery('')}
        value={query}
        placeholder="Digite um nome de personagem"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        disabled={isLoading}
      />
      <button
        type="button"
        disabled={!query || isLoading}
        onClick={() => searchCharacter(query)}
      >
        Pesquisar
      </button>
    </Container>
  );
}
