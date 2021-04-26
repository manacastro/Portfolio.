import React, { Component, } from "react";
import { Navbar, Link, Nav, FormControl, Button } from "react-bootstrap";
import style from '../navBar/NavBar.module.css';

class NavBar extends React.Component {
    render() {
        return (
            <>
                <Navbar className={style.contNav} >
                    <div className={style.name}>
                        <h1>Mariana Castro</h1></div>
                    <Navbar.Collapse className={style.contentItems}>
                        
                        <Nav.Link className={style.items} href="#home">Home</Nav.Link>
                        <Nav.Link className={style.items} href="#AboutMe">About me</Nav.Link>
                        <Nav.Link className={style.items} href="#Conocimientos">Conocimientos</Nav.Link>
                        <Nav.Link className={style.items} href="#Proyectos">Proyectos</Nav.Link>
                        <Nav.Link className={style.items} href="#Contacto">Contacto</Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }

};
export default NavBar;