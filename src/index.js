import React, { useState } from "react";
import { Grid, Row, Col, Panel, ButtonGroup, Button } from "react-bootstrap";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [estado, setEstado] = useState("ENTRADA");

  const [max, setMax] = useState(300);
  const [min, setMin] = useState(0);
  const [palpite, setPalpite] = useState(parseInt((300 - 0) / 2));
  const [tentativas, setTentativas] = useState(1);

  const iniciar = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setPalpite(parseInt((300 - 0) / 2));
    setTentativas(1);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  const eMaior = () => {
    setTentativas(tentativas + 1);
    setMin(palpite);
    const i = parseInt((max - palpite) / 2) + palpite;
    setPalpite(i);
  };

  const eMenor = () => {
    setTentativas(tentativas + 1);
    setMax(palpite);
    const i = parseInt((palpite - min) / 2) + min;
    setPalpite(i);
  };

  if (estado === "ENTRADA") {
    return (
      <div className="App">
        <Button bsStyle={"primary"} onClick={iniciar}>
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
        <Button bsStyle={"primary"} onClick={iniciar}>
          De novoooooooo
        </Button>
      </div>
    );
  }

  const novoPalpite = () => {};

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
        <Button bsStyle={"secondary"} onClick={eMenor}>
          Menor
        </Button>
        <Button bsStyle={"primary"} onClick={acertou}>
          Acertou!
        </Button>
        <Button bsStyle={"secondary"} onClick={eMaior}>
          Maior
        </Button>
      </ButtonGroup>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
