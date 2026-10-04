import { act, renderHook } from "@testing-library/react";

import { useContadorDeTarefas } from "@/hooks/useContadorTasks";

describe("useContadorDeTarefas", () => {
  it("deve iniciar com zero tarefas", () => {
    const { result } = renderHook(() =>
      useContadorDeTarefas()
    );

    expect(result.current.quantidade).toBe(0);
    expect(result.current.tarefas).toEqual([]);
  });

  it("deve aumentar a quantidade ao adicionar uma tarefa", () => {
    const { result } = renderHook(() =>
      useContadorDeTarefas()
    );

    act(() => {
      result.current.adicionarTarefa(
        "Estudar Next.js"
      );
    });

    expect(result.current.quantidade).toBe(1);

    expect(result.current.tarefas).toEqual([
      "Estudar Next.js",
    ]);
  });

  it("não deve adicionar tarefa vazia", () => {
    const { result } = renderHook(() =>
      useContadorDeTarefas()
    );

    act(() => {
      result.current.adicionarTarefa("");
    });

    expect(result.current.quantidade).toBe(0);
  });
});