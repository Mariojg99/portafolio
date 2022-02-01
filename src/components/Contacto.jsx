import React from 'react';
import { Container } from 'react-bootstrap';
import FormContacto from './FormContacto';

const Contacto = () => {
    return (
        <div className='bg-warning py-5'>
            <Container className='d-flex justify-content-center'>
                <div className='bg-dark p-4 text-light col-lg-5 col-sm-8 rounded'>
                    <h3 className='text-center'>Contáctame</h3>
                    <p className='mb-4'>Si estás interesado(a) en trabajar conmigo en un próximo proyecto, no dudes en ponerte en contacto conmigo.</p>
                    <FormContacto />
                </div>
            </Container>
        </div>
    );
};

export default Contacto;
