import React from 'react';
import './Home.css'
import './Home.css';

const Home = () => {
    return (
        <div className="container mt-5">
            <div className="card">
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <img
                            src="./logo.png"
                            className="img-fluid rounded-start"
                            alt="Logo"
                        />
                    </div>
                    <div className="col-md-8 d-flex align-items-center justify-content-center">
                        <div className="card-body text-center">
                            <h1 className="card-title text-success">Bem-vindo ao Belém Tour Guide!</h1>
                            <h5 className="card-text">
                                Explore a cidade de Belém, no Pará, com o nosso guia turístico completo. Descubra os melhores pontos turísticos, restaurantes, eventos e muito mais.
                            </h5>
                            <h5 className="card-text">
                                Este site foi especialmente desenvolvido para os turistas que visitarão Belém durante a COP30. Navegue pelo site e planeje sua próxima aventura em uma das cidades mais encantadoras do Brasil!
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;