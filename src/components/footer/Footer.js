import style from '../footer/Footer.module.css';
import { Facebook, Instagram, EnvelopeFill, Whatsapp, Linkedin, Github, Phone } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import React, { Component, } from "react";
import { Col, Row } from "react-bootstrap";

class Footer extends React.Component {
    render() {
        return (
            <>
                <Container className={style.backFooter} fluid>
                    <Row>
                        <Col className={style.contentContact}>
                            <Row>
                                <Col className={style.contentContact}><EnvelopeFill className={style.redes} /><p className={style.textStyle}>mb.castro17@gmail.com</p>
                                </Col>
                                <Col className={style.contentContact}><Phone className={style.redes}/><p className={style.textStyle}>1121824716</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col className={style.contentRedes}>                 
                            <a href='https://wa.link/fsbuj9' className={style.textStyle} ><Whatsapp className={style.redes} /></a>
                            <a href='https://www.facebook.com/marianacastr'>
                                <Facebook className={style.redes} />
                            </a>
                            <a href='https://www.instagram.com/mbcastro17/?hl=es-la'>
                                <Instagram className={style.redes} />
                            </a>
                            <a href='https://www.linkedin.com/in/marianabeatrizcastro'>
                                <Linkedin className={style.redes} />
                            </a>
                            <a href='https://github.com/manacastro'>
                                <Github className={style.redes} />
                            </a>                            
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }

};
export default Footer;