# Lista de Tarefas - Next.js

Projeto desenvolvido com Next.js 15, TypeScript, Jest e Testing Library.

## Tecnologias utilizadas

* Next.js 15
* React
* TypeScript
* Jest
* Testing Library
* React Testing Library
* User Event

## Funcionalidades

* Carregamento inicial de tarefas através de um Server Component.
* Adição de novas tarefas.
* Contagem das tarefas através de um hook customizado.
* Validação para impedir tarefas vazias.
* Testes unitários do componente `NovaTarefa`.
* Testes unitários do hook `useContadorDeTarefas`.
* Testes da renderização da página.

## Instalação

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta:

```bash
cd lista-tarefas-next
```

Instale as dependências:

```bash
npm install
```

## Executando o projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Depois acesse:

```text
http://localhost:3000
```

## Executando os testes

Para executar os testes:

```bash
npm test
```

Para executar os testes em modo de observação:

```bash
npm run test:watch
```

Para gerar o relatório de cobertura:

```bash
npm run test:coverage
```

## Estrutura do projeto

```text
src/
├── app/
│   ├── page.tsx
│   └── layout.tsx
│
├── components/
│   ├── NovaTarefa.tsx
│   └── ListaTarefas.tsx
│
├── hooks/
│   └── useContadorDeTarefas.ts
│
└── tests/
    ├── NovaTarefa.test.tsx
    ├── useContadorDeTarefas.test.ts
    └── page.test.tsx
```

## Autor
Maurício B. Pinto
Projeto desenvolvido como atividade acadêmica.
