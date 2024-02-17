import { useState } from "react";
import "./styles.css";

export default function Adiciona() {
  const valorInicial = 0;
  const [contador, setContador] = useState(valorInicial);
  const [corBotao, setCorBotao] = useState("black");

  const increment = () => {
    const newContador = contador + 1;
    setContador(newContador);
    // Verifica se o contador é maior que 10 e define a cor do botão
    if (newContador > 10) {
      setCorBotao("red");
    } else {
      setCorBotao("black");
    }
  };

  const decrement = () => {
    const newContador = contador - 1;
    setContador(newContador);
    // Mantem a cor do botao red enquanto o contador é maior que 10
    if (newContador > 10) {
      setCorBotao("red");
    } else {
      setCorBotao("black");
    }
  };
  // Reinicia o contador para o valor inicial e atribui a cor black para o botao
  const restart = () => {
    setContador(valorInicial);
    setCorBotao("black");
  };

  return (
    <div>
      <h3 className="titulo"> Controlador de Temperatura </h3>
      <p data-testid="contador"> {contador}</p>
      <div>
        {/* Aplica a cor dinâmica ao botão */}
        <button
          className="button"
          name="incremento"
          style={{ color: corBotao }}
          onClick={increment}
        >
          Incremento
        </button>
        <button className="button" onClick={decrement}>
          {" "}
          Decremento{" "}
        </button>
        <button className="button" onClick={restart}>
          {" "}
          Reset{" "}
        </button>
      </div>
    </div>
  );
}
