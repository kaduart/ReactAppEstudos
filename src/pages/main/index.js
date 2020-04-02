import React, { Component } from "react";
import { Link } from 'react-router-dom';

import api from '../../services/api';
import './style.css';


export default class Main extends Component {

    state = {
        investimentos: [],
    }
    componentDidMount() {
        this.loadInvestimentos();
    }

    loadInvestimentos = async () => {
        const response = await api.get('/');

        this.setState({ investimentos: response.data.data.listaInvestimentos })
        console.log(response.data.data.listaInvestimentos);
    }


    render() {
        const { investimentos } = this.state;

        return (
            <div className="product-list">
                {investimentos.map(investimento => (

                    <article key={investimento.id}>
                        <strong>{investimento.nome}</strong>

                        <p>{investimento.objetivo}</p>
                        <p>R$ {investimento.saldoTotalDisponivel}</p>

                        <Link to={`/${investimento.id}`}>Detalhar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button onClick={this.prevPage}>Anterior</button>
                    <button onClick={this.nextPage}>Próxima</button>

                </div>
            </div>
        );
    }
}