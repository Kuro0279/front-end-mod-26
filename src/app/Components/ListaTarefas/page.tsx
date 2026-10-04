"use client";

import { NovaTarefa } from "../NovaTarefa/page";
import { useContadorDeTarefas } from "@/hooks/useContadorTasks";

interface ListaTarefasProps {
  tarefasIniciais: string[];
}

export function ListaTarefas({
  tarefasIniciais,
}: ListaTarefasProps) {
  const {
    tarefas,
    quantidade,
    adicionarTarefa,
  } = useContadorDeTarefas();

  const todasAsTarefas = [
    ...tarefasIniciais,
    ...tarefas,
  ];

  return (
    <>
      <NovaTarefa onAdicionar={adicionarTarefa} />

      <p>
        Quantidade de tarefas: {quantidade + tarefasIniciais.length}
      </p>

      <ul>
        {todasAsTarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </>
  );
}