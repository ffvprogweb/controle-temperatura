import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Adiciona from "./componentes/Adiciona";
import App from "./App";
test("CT01 - o valor do contador deve decrementar de 1 no click do botao", () => {
  render(<Adiciona />);
  const btnDecrementa = screen.getByText("Decremento");
  fireEvent.click(btnDecrementa);
  const valorContador = Number(screen.getByTestId("contador").textContent);
  expect(valorContador).toEqual(-1);
});
