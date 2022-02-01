import React from 'react';
import { Form } from 'react-bootstrap';

const FormContacto = () => {
  return (
      <Form>
          <Form.Group className='mb-3'>
              <Form.Control type="text" placeholder="Nombre Completo" />
          </Form.Group>
          <Form.Group className='mb-3'>
              <Form.Control type="email" placeholder="Correo Electrónico" />
          </Form.Group>
          <Form.Group className='mb-3'>
              <Form.Control as="textarea" placeholder="Mensaje" />
          </Form.Group>
      </Form>
  );
};

export default FormContacto;
