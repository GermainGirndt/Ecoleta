import React from 'react';

import './styles.css';

import logo from '../../assets/logo.svg';

import { FiLogIn } from 'react-icons/fi';

import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div id="page-home">
            {/* className and not class, because class is a reserved word */}
            <div className="content">
                {/* Using the svg file logo as a variable... it will serve as image's source*/}
                <header>
                    <img src={logo} alt="Ecoleta"/>
                </header>

                <main>
                    <h1>Seu marketplace de coletas de resíduos.</h1>
                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>


                    {/* If we just used 'a href="create-point"' react would load the whole page; 
                    but we want a Single Page Application, which performst better*/}
                    <Link to="/create-point">
                        <span><FiLogIn /></span>
                        <strong>Cadastre um ponto de coleta</strong>
                    </Link>
                </main>
            </div>
        </div>
    )
}

export default Home;