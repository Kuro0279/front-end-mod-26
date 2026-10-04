import {
  render,
  screen,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { NovaTarefa } from "@/app/Components/NovaTarefa/page";

describe("NovaTarefa", () => {
  it("deve renderizar input e botão", () => {
    render(
      <NovaTarefa onAdicionar={jest.fn()} />
    );

    expect(
      screen.getByRole("textbox", {
        name: "Nova tarefa",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Adicionar",
      })
    ).toBeInTheDocument();
  });

  it("deve permitir digitar uma tarefa", async () => {
    const user = userEvent.setup();

    render(
      <NovaTarefa onAdicionar={jest.fn()} />
    );

    const input = screen.getByRole("textbox", {
      name: "Nova tarefa",
    });

    await user.type(input, "Estudar React");

    expect(input).toHaveValue("Estudar React");
  });

  it("deve chamar onAdicionar ao enviar", async () => {
    const user = userEvent.setup();

    const onAdicionar = jest.fn();

    render(
      <NovaTarefa onAdicionar={onAdicionar} />
    );

    const input = screen.getByRole("textbox", {
      name: "Nova tarefa",
    });

    await user.type(input, "Estudar Next.js");

    await user.click(
      screen.getByRole("button", {
        name: "Adicionar",
      })
    );

    expect(onAdicionar).toHaveBeenCalledWith(
      "Estudar Next.js"
    );
  });

  it("não deve adicionar tarefa vazia", async () => {
    const user = userEvent.setup();

    const onAdicionar = jest.fn();

    render(
      <NovaTarefa onAdicionar={onAdicionar} />
    );

    await user.click(
      screen.getByRole("button", {
        name: "Adicionar",
      })
    );

    expect(onAdicionar).not.toHaveBeenCalled();
  });
});