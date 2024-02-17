import { render, screen } from "@testing-library/react";
import App from "./App";

test("valida o comportamento do componente Adiciona", () => {
  render(<App />);
  const textElement = screen.getByText(/controlador de temperatura/i);
  expect(textElement).toBeInTheDocument();
});
