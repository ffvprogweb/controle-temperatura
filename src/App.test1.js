import { render, screen } from "@testing-library/react";

test("valida o comportamento do componente Adiciona", () => {
  render(<App />);
  const textElement = screen.getByText(/controle de temperatura/i);
  expect(textElement).toBeInTheDocument();
});
