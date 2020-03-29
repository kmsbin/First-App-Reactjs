import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.stateInit = {
            nome: '',
            livro: '',
            preco: '',

        }
        this.state = this.stateInit;
    }
    listenerInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })

    }
    sendComfirm = ()=>{
        this.props.submitListener(this.state);
        this.setState(this.stateInit)

    }



    render() {
        const { nome, livro, preco } = this.state;

        return (

            <form>

                <label htmlFor="nome">Nome</label>
                <input
                    id="nome"
                    type="text"
                    name="nome"
                    onChange={this.listenerInput}
                    value={nome} />

                <label htmlFor="livro">Livro</label>
                <input
                    id="livro"
                    type="text"
                    name="livro"
                    value={livro}
                    onChange={this.listenerInput} />


                <label htmlFor="preco">Preço</label>
                <input
                    id="preco"
                    type="text"
                    name="preco"
                    onChange={this.listenerInput}
                    value={preco} />


                <button onClick={this.sendComfirm} type="button">Salvar
                </button>
            </form>

        );
    }

}

export default Form