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

                        <h1 className="text-center">Titulo Random</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et urna tempor, egestas risus at, semper enim. Phasellus quis eros sed est tempor vulputate. Aenean sed porta neque. Sed sed eros arcu. Nunc at nibh sem. Mauris a neque id erat pretium posuere. Maecenas suscipit justo lacus, id interdum ante mattis at. Aliquam erat volutpat.
                            Fusce sit amet commodo risus, id tempor nisi. Vivamus ac nulla mi. In suscipit faucibus urna, vel faucibus neque. Nulla pulvinar nisl velit, eget dignissim mauris viverra ac. Maecenas vestibulum, augue eu commodo vestibulum, leo velit finibus nibh, a vehicula leo arcu quis mi. Maecenas consequat, nisi nec faucibus auctor, leo massa lacinia tortor, sed varius nisi neque laoreet risus. Sed eget arcu at tortor gravida posuere eget non justo. Nullam congue tortor quis velit aliquam, varius porta risus convallis. Maecenas eu mollis magna. Sed scelerisque lorem quis mattis egestas. Quisque magna enim, vehicula nec risus quis, malesuada semper erat. Phasellus erat neque, iaculis quis nibh nec, finibus gravida lorem. Nunc ac quam purus.</p>
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