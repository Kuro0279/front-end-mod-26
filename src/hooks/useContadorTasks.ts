import { useState } from "react";

export function useContadorDeTarefas() {
  const [tarefas, setTarefas] = useState<string[]>([]);

  function adicionarTarefa(tarefa: string) {
    if (tarefa.trim() === "") {
      return;
    }

    setTarefas((tarefasAtuais) => [...tarefasAtuais, tarefa]);
  }

  return {
    tarefas,
    quantidade: tarefas.length,
    adicionarTarefa,
  };
}