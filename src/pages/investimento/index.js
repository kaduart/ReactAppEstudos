import React, { Component } from 'react';
import api from '../../services/api';

export default class Investimento extends Component {
    state = {
        investimento: {}
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/${id}`)

        this.setState({ investimento: response.data });

        console.log(response.data);
    }
    render() {
        const { investimento } = this.state;
        return (
            <div className="investimento-info">
                <h1>{investimento.nome}</h1>
                <p>{investimento.objetivo}</p>
                <h2>{investimento.saldoTotalDisponivel}</h2>

            </div>

        )
    }

}