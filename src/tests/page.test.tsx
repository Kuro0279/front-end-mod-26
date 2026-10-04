import {
  render,
  screen,
} from "@testing-library/react";

import Home from "@/app/page";

describe("Página inicial", () => {
  it("deve renderizar o título", async () => {
    const page = await Home();

    render(page);

    expect(
      screen.getByRole("heading", {
        name: "Lista de Tarefas",
      })
    ).toBeInTheDocument();
  });

  it("deve renderizar as tarefas iniciais", async () => {
    const page = await Home();

    render(page);

    expect(
      screen.getByText("Estudar Next.js")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Fazer os testes")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Publicar o projeto")
    ).toBeInTheDocument();
  });
});