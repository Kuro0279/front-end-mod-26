import { ListaTarefas } from "./Components/ListaTarefas/page";

async function carregarTarefas(): Promise<string[]> {
  return Promise.resolve([
    "Estudar Next.js",
    "Fazer os testes",
    "Publicar o projeto",
  ]);
}

export default async function Home() {
  const tarefas = await carregarTarefas();

  return (
    <main>
      <h1>Lista de Tarefas</h1>

      <ListaTarefas tarefasIniciais={tarefas} />
    </main>
  );
}