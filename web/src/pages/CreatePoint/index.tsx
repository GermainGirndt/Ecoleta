import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import logo from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi'


const CreatePoint = () => {
    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta"/>

                <Link to="/">
                    <span>< FiArrowLeft /></span>
                    Voltar para home
                </Link>
            
            </header>

            <form>
            <h1>Cadastro do ponto <br/> de coleta</h1>

            <fieldset>
                <legend>
                    <h2>Dados</h2>
                </legend>
                <div className="field-group">
                    <div className="field">
                        <label htmlFor="name">Nome da Entidade</label>
                        <input type="text" name="name" id="name"/>
                    </div>
                </div>


                <div className="field-group">
                    <div className="field">
                        <label htmlFor="email">E-mail</label>
                        <input type="text" name="email" id="email"/>
                    </div>
                    <div className="field">
                        <label htmlFor="whatsapp">Whatsapp</label>
                        <input type="text" name="whatsapp" id="whatsapp"/>
                    </div>
                </div>

            </fieldset>


            <fieldset>
                <legend>
                    <h2>Endereços</h2>
                </legend>
            </fieldset>

            <fieldset>
                <legend>
                    <h2>Ítens de Coleta</h2>
                </legend>
            </fieldset>
            </form>
        </div>
    );
};

export default CreatePoint;