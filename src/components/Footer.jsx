import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark">
            <Container className='text-center p-3 text-lg-start text-light d-flex flex-row justify-content-between'>
            <div>
                <p>Logo</p>
            </div>
            <div>
                <p>© 2022 Copyright: Jose Mario Gulfo</p> 
            </div>
            <div>
                <a href="https://github.com/Mariojg99" target="_blank">
                    <i className="bi bi-github px-1"></i>
                </a>
                <a href="https://www.linkedin.com/in/jose-mario-gulfo-urango-07365a173" target="_blank">
                    <i className="bi bi-linkedin px-1"></i>
                </a>
                <a href="https://www.facebook.com/JoseMario27" target="_blank">
                    <i className="bi bi-facebook px-1"></i>
                </a>
            </div>

            </Container>
        </footer>
    );
};

export default Footer;
