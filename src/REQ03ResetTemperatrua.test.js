import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Adiciona from "./componentes/Adiciona";
import App from "./App";

test("CT01 - o valor do contador deve incrementar de 1 a cada click do botao", () => {
  render(<Adiciona />);
  const btnIcrementa = screen.getByText("Incremento");
  fireEvent.click(btnIcrementa);
  fireEvent.click(btnIcrementa);
  const valorContador = Number(screen.getByTestId("contador").textContent);
  expect(valorContador).toEqual(2);
});
test("CT02 - o botao reset deve registrar zero quando pressionado", () => {
  render(<App />);
  const btnReset = screen.getByText("Reset");
  fireEvent.click(btnReset);
  const valorContador = Number(screen.getByTestId("contador").textContent);
  expect(btnReset).toBeTruthy();
  expect(valorContador).toEqual(0);
});
