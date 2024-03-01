import React, { useState } from "react";
import "./styles.css";

function ConsultaCep() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);
  const [erro, setErro] = useState(null);

  async function buscarEndereco() {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (response.ok) {
        if (data.erro) {
          setErro("CEP não localizado");
          setEndereco(null);
        } else {
          setEndereco(data);
          setErro(null);
        }
      } else {
        throw new Error("Erro na busca do CEP");
      }
    } catch (error) {
      setErro("Erro na busca do CEP");
      setEndereco(null);
    }
  }

  return (
    <div>
      <div className="titulo">
        CEP :{" "}
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="Digite o CEP"
        />
        <button onClick={buscarEndereco}>Buscar</button>
      </div>
      {endereco && (
        <div>
          <p>CEP: {endereco.cep}</p>
          <p>Logradouro: {endereco.logradouro}</p>
          <p>Bairro: {endereco.bairro}</p>
          <p>Cidade: {endereco.localidade}</p>
          <p>Estado: {endereco.uf}</p>
        </div>
      )}
      {erro && <div>{erro}</div>}
    </div>
  );
}

export default ConsultaCep;
