import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Cards = ({ proyecto }) => {

  return (
    <Col>
      <Card className="mb-3">
        <Card.Img variant="top" src={proyecto.imagen} alt='imagen' style={{width: "100%"}}/>
        <Card.Body>
          <Card.Title>{proyecto.nombre}</Card.Title>
          <Card.Text>
            {proyecto.descripcion}
          </Card.Text>
        </Card.Body>
        <Card.Footer className='text-center'>
          <Card.Link href={proyecto.urlCodigo}>
            <Button variant='outline-dark'>Ver Código</Button>
          </Card.Link>
          <Card.Link href={proyecto.urlDespliegue}>
          <Button variant='outline-warning'>Ver Página</Button>
          </Card.Link>
        </Card.Footer>
      </Card>
    </Col>
  );

}

export default Cards;