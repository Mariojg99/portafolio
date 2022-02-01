import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { HolaImg } from '../styles/HolaStyles';

const Hola = () => {
  return (
      <Row className='text-center align-items-center py-5 bg-dark text-light'>
          <Col md={6} className='mb-3'>
              <HolaImg src="https://res.cloudinary.com/karma09-jm/image/upload/v1643688862/Varios/75325930_697604170746423_2416006455044866048_n_ownyfj.jpg" alt="foto" />
          </Col>
          <Col md={6} className='mb-3'>
              <h1>¡Hola a todos!</h1>
              <h1>Soy Jose Mario Gulfo</h1>
              <p>Ingeniero de Sistemas y Desarrollador Web Frontend</p>
          </Col>
          
      </Row>
  );
};

export default Hola;
