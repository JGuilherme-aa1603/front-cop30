import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container mt-5">
            <div className="card shadow-lg border-0">
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center justify-content-center bg-light">
                        <img
                            src="./logo.png"
                            className="img-fluid rounded-start p-3"
                            alt="Logo"
                        />
                    </div>
                    <div className="col-md-8 d-flex align-items-center justify-content-center">
                        <div className="card-body text-center">
                            <h1 className="card-title text-success fw-bold mb-4">
                                Bem-vindo ao Belém Tour Guide!
                            </h1>
                            <p className="card-text text-muted fs-5">
                                Explore a cidade de Belém, no Pará, com o nosso guia turístico completo. Descubra os melhores pontos turísticos, restaurantes, eventos e muito mais.
                            </p>
                            <p className="card-text text-muted fs-5">
                                Este site foi especialmente desenvolvido para os turistas que visitarão Belém durante a COP30. Navegue pelo site e planeje sua próxima aventura em uma das cidades mais encantadoras do Brasil!
                            </p>
                            <NavLink to="/pontos-turisticos" className="btn btn-success btn-lg mt-3">
                                Explore Pontos Turísticos
                            </NavLink>
                            <NavLink to="/culinaria" className="btn btn-success btn-lg mt-3 ms-3">
                                Descubra a Culinária
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;