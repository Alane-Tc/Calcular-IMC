import React from "react";
import { Helmet } from 'react-helmet'
import '../components/styles/calculadora.css'
import TablaIMC from '../assets/img/Captura.JPG'
import Buttons from "../components/buttons";

const handleClick = () => {
    let peso = parseFloat(document.querySelector("#numero1").value);
    let estatura = parseFloat(document.querySelector("#numero2").value);
    let resultadoSpan = document.querySelector("#span-results");
    let resultado = peso / (estatura) ** 2;
    resultadoSpan.innerHTML = `Tu IMC es: ${resultado.toFixed(3)}`
}
const TITLE = 'Calcular IMC'
export default function Calculadora() {
    return (
        <div className="container">
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <header id="header">
                <h1 className="text-center">Calcular el IMC</h1>
            </header>
            <div id="div_main">
                <div className="grid-item">
                    <div className="row align-items-center">
                        <div className="col">
                            <img id="tabla-Imc" src={TablaIMC}/>
                        </div>

                        <div className="col">
                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Peso</span>
                                <input id="numero1" type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>

                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Estatura</span>
                                <input id="numero2" type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <Buttons id="bnt-calculate" className="btn btn-success" onClick={handleClick} content="Calcular" /> <br />
                            <br />
                            <span id="span-results"></span>
                        </div>
                    </div>
                    <div className="page-header"></div>
                    <div className="row align-items-end">
                        <div className="col">
                            <h2 className="intrucciones">¿Cómo usar la calculadora de IMC?</h2>
                            <p className="intrucciones">
                                Paso 1. Introduce tu peso actual, en kilogramos (kgs); <br />
                                Paso 2. Poné tu altura actual, en metros (cms); <br />
                                Paso 3. Hacé clic calcular
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}