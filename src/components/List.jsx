import React from 'react';
import { Row } from 'react-bootstrap';
import Cards from './Cards';

const List = ({proyectos}) => {
    return (
        <Row xs={1} md={2} className='mx-auto mt-5'>
                {
                    proyectos.map((proyecto, index) => (
                        <Cards
                            key={index}
                            proyecto={proyecto}
                        />
                    ))
                }
        </Row>
    );
};

export default List;