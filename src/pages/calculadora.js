import React from "react";
import { Helmet } from 'react-helmet'
import '../components/styles/calculadora.css'
import TablaIMC from '../assets/img/imc_tabla.jpg'
import Buttons from "../components/buttons";

const handleClick = () => {
    alert("Si jalo")
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
                            <img src={TablaIMC} width="350px" height="350px" />
                        </div>

                        <div className="col">
                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Peso</span>
                                <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>

                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Estatura</span>
                                <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <Buttons id="bnt-calculate" className="btn btn-success" onClick={handleClick} content="Calcular" /> <br />
                            <span>Tu imc es XXXXXXX</span>
                        </div>
                    </div>
                    <div className="page-header"></div>
                    <div className="row align-items-end">
                        <div className="col">
                            <h2>¿Cómo usar la calculadora de IMC?</h2>
                            <p>
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