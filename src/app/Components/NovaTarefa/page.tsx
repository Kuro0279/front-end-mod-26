"use client";

import { FormEvent, useState } from "react";

interface NovaTarefaProps {
  onAdicionar: (tarefa: string) => void;
}

export function NovaTarefa({ onAdicionar }: NovaTarefaProps) {
  const [tarefa, setTarefa] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (tarefa.trim() === "") {
      return;
    }

    onAdicionar(tarefa.trim());
    setTarefa("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={tarefa}
        onChange={(event) => setTarefa(event.target.value)}
        aria-label="Nova tarefa"
      />

      <button type="submit">
        Adicionar
      </button>
    </form>
  );
}