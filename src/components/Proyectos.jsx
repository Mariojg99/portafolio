import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import List from './List';
import endPoint from '../helpers/endPoint';


const Proyectos = () => {
    
    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        getProyectos().then(proyectsData => setProyectos(proyectsData))
    }, []);

    const getProyectos = async () => {
        const resp = await fetch(endPoint);
        const data = await resp.json()
        
        const proyectsData = data.map(proyect => {
            return {
                id: proyect.id,
                nombre: proyect.nombre,
                descripcion: proyect.descripcion,
                urlCodigo: proyect.urlCodigo,
                urlDespliegue: proyect.urlDespliegue,
                imagen: proyect.imagen
            }
        })
        return proyectsData;
    }

    return (
        <Container className='py-5' id='proyectos'>
            <Row>
                <Col md={6}>
                    <h2>Parece magia, funciona con código</h2>
                </Col>
                <Col md={6}>
                    <p>A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increibles.</p>
                </Col>
            </Row>
                <h2 className='text-center mb-3'>Estos son algunos de mis proyectos</h2>
            <div className="g-4">
                <List proyectos={proyectos} />
            </div>

        </Container>
    );
};

export default Proyectos;
