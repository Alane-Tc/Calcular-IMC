import React from "react";
import "../components/styles/App.css"
import ImgPeso from '../assets/img/Dieta.jpg'
import ImgPeso2 from '../assets/img/Peso.jpg'
import ImgCalculadora from '../assets/img/calculadora.jpg'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import Buttons from "../components/buttons";

const TITLE = '¿Qué es el IMC?'
export default function Home() {
    return (
        <div>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <div className="container-fluid">
                <img src={ImgPeso} className="img-fluid" />
            </div>

            <div className="page-header"></div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={ImgPeso2} className="rounded mx-auto d-block img-fluid img-styles" alt="Peso"
                            width='300px' height='300px' />
                        <br />

                        <h1 className="text-center">¿Qué es el IMC?</h1>
                        <p>
                            El índice de masa corporal (IMC) es una razón matemática que asocia la masa y la talla de un individuo, ideada por el estadístico belga Adolphe Quetelet, por lo que también se conoce como índice de Quetelet.
                            El IMC también puede calcularse a partir de tablas o gráficas que muestran el IMC en función de la masa y la altura usando líneas de contorno para distintas categorías. El IMC es un criterio ampliamente aceptado, pero no es exacto. Clasifica a las personas en infra peso, peso normal, sobrepeso y obesidad, basándose exclusivamente en la masa del individuo y su altura. No tendría en cuenta la edad, el sexo, el porcentaje de grasa corporal o la masa muscular. Incluso la categorización aún hoy es objeto de debate sobre dónde se deberían colocar esos límites.
                        </p>
                    </div>
                </div>

                <div className="page-header"></div>

                <div className="grid-item">
                    <h1 id="Title-Calculator"><b>Calcular Tu IMC</b></h1>
                    <img src={ImgCalculadora} className="img-fluid img-styles" width='300px' height='300px' />
                    <br />

                    <Link to="/calculadoras">
                        <Buttons id="bnt-next" className="btn btn-success" content="Click Aqui" />
                    </Link>

                </div>
            </div>
        </div>
    );
}