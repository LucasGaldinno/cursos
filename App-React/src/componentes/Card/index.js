import React from 'react';
import './style.css';

function Card() {
    return(
        <div className="card-container">
            <p>AUTOMAÇÃO HIDRÁULICA INDUSTRIAL</p>
            <img className="imag2" src="../img/automocaoH.jpg"></img>
            <p>Duração: 4 meses </p>
            <p>Valor Total: R$ 495,00</p>
        </div>
    );
}

export default Card;