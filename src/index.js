import React, { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import ReactDOM from "react-dom";

import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [estado, setEstado] = useState("ENTRADA");

  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  const [palpite, setPalpite] = useState(0);
  const [tentativas, setTentativas] = useState(0);

  const iniciar = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setPalpite(parseInt(Math.random() * (300 - 0)));
    setTentativas(1);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  const eMaior = () => {
    setTentativas(tentativas + 1);
    setMin(palpite);
    const i = parseInt(Math.random() * (max - palpite)) + palpite;
    setPalpite(i);
  };

  const eMenor = () => {
    setTentativas(tentativas + 1);
    setMax(palpite);
    const i = parseInt(Math.random() * (palpite - min)) + min;
    setPalpite(i);
  };

  if (estado === "ENTRADA") {
    return (
      <div className="App">
        <Button variant="primary" onClick={iniciar}>
          Começar
        </Button>
      </div>
    );
  }

  if (estado === "FIM") {
    return (
      <div className="App">
        <h1>Aeeeeeeee!!!!!</h1>
        <p>
          Tentei {tentativas}x para acertar seu # {palpite}!
        </p>
        <Button variant="primary" onClick={iniciar}>
          De novoooooooo
        </Button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>
        Vc pensou no #
        <i>
          <strong>{palpite}</strong>
        </i>
        ?
      </p>
      <p>
        Min: {min} | Max: {max} | Tentativas: {tentativas}
      </p>
      <ButtonGroup>
        <Button variant="secondary" onClick={eMenor}>
          Menor
        </Button>
        <Button variant="primary" onClick={acertou}>
          Acertou!
        </Button>
        <Button variant="secondary" onClick={eMaior}>
          Maior
        </Button>
      </ButtonGroup>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
