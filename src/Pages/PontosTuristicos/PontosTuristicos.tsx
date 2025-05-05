import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './PontosTuristicos.css'; 

interface PontoTuristicoData {
  id: number;
  nome: string;
  descricao: string;
  imagem: string; 
  linkMaisInfo?: string;
  linkMapa?: string;
}
const criarLinkGoogleMaps = (query: string): string => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
};

const pontosTuristicosData: PontoTuristicoData[] = [
  {
    id: 1,
    nome: 'Mercado Ver-o-Peso',
    descricao: 'O maior mercado a céu aberto da América Latina, com cores, cheiros e sabores regionais.',
    imagem: '/ImagensPontos/mercado-ver-o-peso.jpg',
    linkMaisInfo: 'https://pt.wikipedia.org/wiki/Mercado_Ver-o-Peso',
    linkMapa: criarLinkGoogleMaps('Mercado Ver-o-Peso, Belém PA') 
  },
  {
    id: 2,
    nome: 'Estação das Docas',
    descricao: 'Antigos armazéns portuários revitalizados com restaurantes, bares e sorveterias à beira da baía.',
    imagem: '/ImagensPontos/Estacao-das-Docas-Belem.jpg',
    linkMaisInfo: 'https://estacaodasdocas.com/',
    linkMapa: criarLinkGoogleMaps('Estação das Docas, Belém PA') 
  },
  {
    id: 3,
    nome: 'Basílica Santuário de N. Sra. de Nazaré',
    descricao: 'Imponente igreja em estilo neoclássico, centro da fé paraense e do Círio de Nazaré.',
    imagem: '/ImagensPontos/basilica.jpg',
    linkMaisInfo: 'https://basilicadenazare.com.br/',
    linkMapa: criarLinkGoogleMaps('Basílica Santuário de Nossa Senhora de Nazaré, Belém PA')
  },
  {
    id: 4,
    nome: 'Theatro da Paz',
    descricao: 'Majestoso teatro do século XIX, um dos mais importantes do Brasil, com visitas guiadas.',
    imagem: '/ImagensPontos/Theatro-da-paz.jpg',
    linkMaisInfo: 'https://www.theatrodapaz.com.br/',
    linkMapa: criarLinkGoogleMaps('Theatro da Paz, Belém PA')
  },
  {
    id: 5,
    nome: 'Mangal das Garças',
    descricao: 'Parque ecológico com viveiro, borboletário, mirante e restaurante com vista para o rio.',
    imagem: '/ImagensPontos/mangal-das-garças.jpg',
    linkMaisInfo: 'https://mangaldasgarcas.com.br/',
    linkMapa: criarLinkGoogleMaps('Mangal das Garças, Belém PA')
  },
  {
    id: 6,
    nome: 'Forte do Presépio',
    descricao: 'Marco inicial da cidade, abriga museu e oferece vista panorâmica da Baía do Guajará.',
    imagem: '/ImagensPontos/forte-do-presepio.jpg',
    linkMaisInfo: 'https://museus.pa.gov.br/museus/7/museu-forte-do-prespio',
    linkMapa: criarLinkGoogleMaps('Forte do Presépio, Belém PA')
  },
   {
    id: 7,
    nome: 'Casa das Onze Janelas',
    descricao: 'Antigo hospital militar, hoje espaço cultural com exposições e restaurante renomado.',
    imagem: '/ImagensPontos/casa-das-onze-janelas.jpg',
    linkMaisInfo: 'https://museus.pa.gov.br/museus/6/espao-cultural-casa-das-onze-janelas',
    linkMapa: criarLinkGoogleMaps('Casa das Onze Janelas, Belém PA') 
  },
   {
    id: 8,
    nome: 'Museu Paraense Emílio Goeldi',
    descricao: 'Importante centro de pesquisa e divulgação científica sobre a Amazônia, com parque zoobotânico.',
    imagem: '/ImagensPontos/museu.jpg',
    linkMaisInfo: 'https://www.gov.br/museugoeldi/pt-br',
    linkMapa: criarLinkGoogleMaps('Museu Paraense Emílio Goeldi, Belém PA')
  },
   {
    id: 9,
    nome: 'Parque Estadual do Utinga',
    descricao: 'Refúgio de natureza amazônica próximo à cidade. Ideal para caminhadas, ciclismo e observação da fauna e flora local em trilhas bem estruturadas ao redor dos lagos Bolonha e Água Preta.',
    imagem: '/ImagensPontos/utinga.jpg',
    linkMaisInfo: 'https://parquedoutinga.com.br/',
    linkMapa: criarLinkGoogleMaps('Parque Estadual do Utinga Camillo Vianna, Belém PA')
  },
];

const PontosTuristicos: React.FC = () => {
  return (
    <Container className="mt-5">
      <h1 className="mb-4 text-center page-title">Principais Pontos Turísticos de Belém</h1>

      <Row>      
        {pontosTuristicosData.map((ponto) => (
          <Col md={4} key={ponto.id} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={ponto.imagem}
                alt={`Foto de ${ponto.nome}`}
                className="card-img-top"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="card-title">{ponto.nome}</Card.Title>
                <Card.Text className="card-text">
                  {ponto.descricao}
                </Card.Text>

                {ponto.linkMapa && (
                    <Button
                      variant="outline-secondary" 
                      size="sm"
                      href={ponto.linkMapa}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Ver ${ponto.nome} no mapa`}
                    >
                      Ver no Mapa
                    </Button>
                  )}
                {
                <Button
                  variant="primary"
                  className="mt-auto" 
                  href={ponto.linkMaisInfo || '#'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Saiba Mais
                </Button>
                 }
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default PontosTuristicos;