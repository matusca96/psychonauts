import { fireEvent, render, screen } from '@testing-library/react';
import { useContext } from 'react';
import {
  CharacterProvider,
  CharacterContext,
} from '../../contexts/CharacterContext';

jest.mock('axios', () => {
  return {
    create: jest.fn(() => ({
      get: jest.fn().mockResolvedValue({
        data: {
          name: 'John Doe',
        },
      }),
    })),
  };
});

describe('CharacterContext component', () => {
  it('renders correctly', () => {
    render(
      <CharacterProvider>
        <div>Psychonauts</div>
      </CharacterProvider>,
    );

    expect(screen.getByText('Psychonauts')).toBeInTheDocument();
  });

  it('searches for character when click in search button', async () => {
    function TestComponent() {
      const { character, searchCharacter } = useContext(CharacterContext);

      return (
        <>
          <span>{character.name}</span>
          <button type="button" onClick={() => searchCharacter('john doe')}>
            Pesquisar
          </button>
        </>
      );
    }

    render(
      <CharacterProvider>
        <TestComponent />
      </CharacterProvider>,
    );

    const button = screen.getByText('Pesquisar');
    fireEvent.click(button);

    expect(await screen.findByText('John Doe')).toBeInTheDocument();
  });
});
