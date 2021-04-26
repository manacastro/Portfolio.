import style from '../buttonCV/ButtonCV.module.css';
import Container from "react-bootstrap/Container";
import React, { Component, } from "react";

class ButtonCV extends React.Component {
    render() {
        return (
            <>
                <Container className={style.contHome}>
                    <div  className={style.butcont}>
                        <img src="../woman.jpg" className={style.imgHome}></img>
                        <a className={style.buttonCv} href="./piblic/MarianaCastroCV.pdf" download>Descargar CV</a>
                    </div>
                    <div className={style.contentButton}>
                        
                    </div>
                </Container>

            </>
        );
    }

};
export default ButtonCV;