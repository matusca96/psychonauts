Aplicação criada para pesquisar os personagens mais conhecidos do jogo Psychonauts, foi desenvolvida utilizando ReactJS, Next.js, styled-components, dentre outras bibliotecas.

[LIVE DEMO](https://psychonauts.vercel.app/)

Sugestões de personagens para pesquisar: [aqui](https://psychonauts.fandom.com/wiki/Category:Characters) (Não são todos os personagens que estão disponíveis na API)

Para rodar a aplicação, clone este repositório, acesse a pasta do projeto e rode ```yarn``` ou ```npm install``` para instalar as dependências e por fim, ```yarn dev``` ou ```npm run dev``` para subir a aplicação.

Para rodas os testes, utilizar o comando ```yarn jest```.

OBS.: descobri um pequeno bug em uma interação com o Server-side rendering do Next.js em conjunto ao styled-components do qual não consegui resolver, o que aparentemente parece ser um bug bem conhecido pela comunidade, no qual é gerado um console.log indicando dificuldades na geração das classes de estilização do lado do cliente e do lado do servidor.
