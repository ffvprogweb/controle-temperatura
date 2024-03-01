import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Adiciona from "./componentes/Adiciona";
import App from "./App";
test("CT01- verifica o estado do contador na inicializacao", () => {
  //dado que o contador foi inicializado
  render(<Adiciona />);
  //quando consulto o valor do contador
  const valorContador = Number(screen.getByTestId("contador").textContent);
  //entao contador = 0
  expect(valorContador).toBe(0);
});
test("CT02- o valor do contador deve incrementar de 1 no click do botao", () => {
  render(<Adiciona />);
  const btnIncrementa = screen.getByRole("button", { name: "Incremento" });
  fireEvent.click(btnIncrementa);
  const valorContador = Number(screen.getByTestId("contador").textContent);
  expect(valorContador).toEqual(1);
});
test("CT03 - o valor do contador deve decrementar de 1 no click do botao", () => {
  render(<Adiciona />);
  const btnDecrementa = screen.getByText("Decremento");
  fireEvent.click(btnDecrementa);
  const valorContador = Number(screen.getByTestId("contador").textContent);
  expect(valorContador).toEqual(-1);
});
test("CT04- verifica o estado do contador na inicializao", () => {
  const { getByTestId } = render(<Adiciona />);
  const contadorElement = getByTestId("contador");
  expect(contadorElement.textContent).toBe(" 0"); // Verifica se o texto inicial é '0'
});
test("CT04- verifica o estado do contador na inicializacao", () => {
  //dado que o contador foi inicializado
  render(<Adiciona />);
  //quando consulto o valor do contador
  const valorContador = Number(screen.getByTestId("contador").textContent);
  //entao contador = 0
  expect(valorContador).toBe(0);
});
test("CT05 - na inicialização deve apresentar o titulo da pagina", () => {
  render(<Adiciona />);
  const label = screen.getByText("Controlador de Temperatura");
  expect(label).toBeTruthy();
});
test("CT06 - o valor do contador deve incrementar de 1 a cada click do botao", () => {
  render(<Adiciona />);
  const btnIcrementa = screen.getByText("Incremento");
  fireEvent.click(btnIcrementa);
  fireEvent.click(btnIcrementa);
  const valorContador = Number(screen.getByTestId("contador").textContent);
  expect(valorContador).toEqual(2);
});
test("CT07 - o botao reset deve registrar zero quando pressionado", () => {
  render(<Adiciona />);
  const btnReset = screen.getByText("Reset");
  fireEvent.click(btnReset);
  const valorContador = Number(screen.getByTestId("contador").textContent);
  expect(btnReset).toBeTruthy();
  expect(valorContador).toEqual(0);
});
test("CT08 - deve mudar a cor do botão para vermelho quando o contador é maior que 10", () => {
  const { getByText } = render(<Adiciona />);
  const btnIncrementa = getByText("Incremento");

  // Clicar no botão incremento várias vezes para aumentar o contador
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);

  // Verificar se na tela (toBeInTheDocument) existe o texto 11 significa que o contador > 10
  expect(getByText("11")).toBeInTheDocument();

  // Verificar se a cor do botão é vermelha
  expect(btnIncrementa).toHaveStyle("color: red");
});
test("CT09 - deve mudar a cor do botão para preto quando o contador é decrementado para 10", () => {
  const { getByText } = render(<Adiciona />);
  const btnIncrementa = getByText("Incremento");
  const btnDecrementa = screen.getByText("Decremento");

  // Clicar no botão incremento várias vezes para aumentar o contador
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);

  // Verificar se na tela (toBeInTheDocument) existe o texto 11 significa que o contador > 10
  expect(getByText("11")).toBeInTheDocument();
  fireEvent.click(btnDecrementa);
  // Verificar se a cor do botão é preto
  expect(btnIncrementa).toHaveStyle("color: black");
});
test("CT10 - deve manter a cor em red quando o contador eh decrementado", () => {
  const { getByText } = render(<Adiciona />);
  const btnIncrementa = getByText("Incremento");
  const btnDecrementa = screen.getByText("Decremento");

  // Clicar no botão incremento várias vezes para aumentar o contador
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);
  fireEvent.click(btnIncrementa);

  // Dado que o contador é igual a 12
  expect(getByText("12")).toBeInTheDocument();
  //Quando decremento o contador
  fireEvent.click(btnDecrementa);
  // entao a cor do botão é mantida em red
  expect(btnIncrementa).toHaveStyle("color: red");
});
