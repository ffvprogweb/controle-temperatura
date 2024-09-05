import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Adiciona from "./componentes/Adiciona";
import App from "./App";
test("CT01 - verifica a apresentacao do titulo na interface", () => {
  //dado que a interface foi inicializada
  render(<App />);
  //quando consulto o titulo na interface
  const textElement = screen.getByText(/controlador de temperatura/i);
  //entao o titulo é localizado
  expect(textElement).toBeInTheDocument();
});
test("CT02- verifica o estado do contador na inicializacao", () => {
  //dado que o contador foi inicializado
  render(<Adiciona />);
  //quando consulto o valor do contador
  const valorContador = Number(screen.getByTestId("contador").textContent);
  //entao contador = 0
  expect(valorContador).toBe(0);
});
test("CT03 - o valor do contador deve incrementar de 1 a cada click do botao", () => {
  render(<Adiciona />);
  const btnIcrementa = screen.getByText("Incremento");
  fireEvent.click(btnIcrementa);
  fireEvent.click(btnIcrementa);
  const valorContador = Number(screen.getByTestId("contador").textContent);
  expect(valorContador).toEqual(2);
});
