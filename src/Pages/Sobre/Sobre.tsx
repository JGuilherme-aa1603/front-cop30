import React from "react";

const Sobre = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 display-4 text-primary">Sobre Belém e a COP30</h1>
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <h2 className="card-title text-success">Belém do Pará</h2>
                            <p className="card-text">
                                Belém, localizada na região Norte do Brasil, é conhecida como a "Cidade das Mangueiras" devido à grande quantidade de árvores dessa espécie. É uma cidade rica em cultura, história e biodiversidade, sendo a porta de entrada para a Amazônia. Sua culinária é única, com pratos como tacacá, maniçoba e açaí, que encantam visitantes de todo o mundo.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <h2 className="card-title text-success">COP30</h2>
                            <p className="card-text">
                                A COP30 será um marco importante na luta contra as mudanças climáticas. Este evento reunirá líderes globais, cientistas e ativistas para discutir e implementar ações que visam a preservação do meio ambiente. Realizar a COP30 em Belém destaca a importância da Amazônia no equilíbrio climático do planeta e reforça a necessidade de sua proteção.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">
                <p className="lead text-muted">
                    Belém será o centro das atenções globais, mostrando ao mundo sua beleza, cultura e o papel crucial da Amazônia na sustentabilidade do planeta.
                </p>
            </div>
        </div>
    );
};

export default Sobre;