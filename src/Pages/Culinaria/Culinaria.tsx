import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

interface RestauranteData {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  linkMaisInfo?: string;
  linkMapa: string;
}

const criarLinkGoogleMaps = (query: string): string => {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
};

const restaurantesData: RestauranteData[] = [
  {
    id: 1,
    nome: 'Amazonia na Cuia',
    descricao: 'Restaurante típico com pratos da culinária amazônica e ingredientes regionais.',
    imagem: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/9f/ab/24/menu-degustacao-paraense.jpg?w=1400&h=800&s=1',
    linkMapa: criarLinkGoogleMaps('Amazonia na Cuia, Belém PA'),
    linkMaisInfo: 'https://www.amazonianacuia.com',
  },
  {
    id: 2,
    nome: 'Ver o Açaí',
    descricao: 'Especializado em açaí e outros pratos típicos da Amazônia, com ambiente acolhedor.',
    imagem: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/48/74/de/menu-degustacao-pra-quem.jpg?w=1400&h=800&s=1',
    linkMapa: criarLinkGoogleMaps('Restaurante Ver O Açaí - Umarizal, Belém PA'),
    linkMaisInfo: 'https://www.tripadvisor.com.br/Restaurant_Review-g303404-d16751056-Reviews-Restaurante_Ver_O_Acai_Umarizal-Belem_State_of_Para.html',
  },
  {
    id: 3,
    nome: 'Point do Açaí',
    descricao: 'Um dos melhores locais para saborear açaí e outras iguarias regionais no Pará.',
    imagem: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/81/e8/a5/campeao-de-venda-chapa.jpg?w=1800&h=1000&s=1',
    linkMapa: criarLinkGoogleMaps('Point do Açaí Belle Époque Bar, Belém PA'),
    linkMaisInfo: 'https://www.tripadvisor.com.br/Restaurant_Review-g528793-d1006253-https://www.tripadvisor.com.br/Restaurant_Review-g303404-d6483240-Reviews-Restaurante_Point_do_Acai-Belem_State_of_Para.htmlReviews-Point_do_Acai-Belem_State_of_Para.html',
  },
  {
    id: 4,
    nome: 'Apoena',
    descricao: 'Espaço cultural com culinária, música e arte típica paraense com shows de carimbó e festas em clima animado.',
    imagem: 'https://lh3.googleusercontent.com/p/AF1QipNi5bPY1YMHtSl1JkP0SiDJoYGfskBNllndOJck=w750-h606-p-k-no',
    linkMapa: criarLinkGoogleMaps('Espaço Cultural Apoena, Belém PA'),
    linkMaisInfo: 'https://www.tripadvisor.com.br/Restaurant_Review-g303404-d12284173-Reviews-Espaco_cultural_Apoena-Belem_State_of_Para.html',
  },
  {
    id: 5,
    nome: 'Ochalé',
    descricao: 'Bolinhos de bacalhau, drinques e carnes assadas e grelhadas em um restaurante animado com mesas ao ar livre.',
    imagem: 'https://lh3.googleusercontent.com/p/AF1QipNCCmnHhTPsQ0xeBWJSGyHmJVbHSd9ZBK8NBNZ9=w750-h1235-p-k-no',
    linkMapa: criarLinkGoogleMaps('Ochalé, Belém PA'),
    linkMaisInfo: 'https://www.tripadvisor.com/Restaurant_Review-g303404-d20361682-Reviews-Ochale-Belem_State_of_Para.html',
  },
  {
    id: 6,
    nome: 'Coco Bambu Belém',
    descricao: 'O maior restaurante de Frutos do mar do Brasil, em Belém.',
    imagem: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/b8/bf/6a/lagosta-imperial.jpg?w=1400&h=800&s=1',
    linkMapa: criarLinkGoogleMaps('Coco Bambu Belém, Belém PA'),
    linkMaisInfo: 'https://www.cocobambu.com/unidades/cb-belem',
  },
];

const Culinaria: React.FC = () => {
  return (
    <Container className="mt-5">
      <h1 className="mb-4 text-center page-title">Restaurantes Típicos do Pará</h1>
      <Row>
        {restaurantesData.map((restaurante) => (
          <Col md={4} key={restaurante.id} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={restaurante.imagem}
                alt={`Foto de ${restaurante.nome}`}
                className="card-img-top"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="card-title">{restaurante.nome}</Card.Title>
                <Card.Text className="card-text">{restaurante.descricao}</Card.Text>

                <Button
                  variant="outline-secondary"
                  size="sm"
                  href={restaurante.linkMapa}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Ver ${restaurante.nome} no mapa`}
                >
                  Ver no Mapa
                </Button>

                <Button
                  variant="primary"
                  className="mt-auto"
                  href={restaurante.linkMaisInfo || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Saiba Mais
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Culinaria;

