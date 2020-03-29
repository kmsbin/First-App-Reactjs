import React, { Component } from 'react';
import Tabela from './Tabela';
import './App.css';

import Form from './Form';

class App extends Component {
  state = {
    autores : [
      {
      nome:'kaulindo',
      livro: 'flutter',
      preco: '20'
    },
    {
      nome:'cleytin',
      livro: 'roubandosuamae',
      preco: '9999'
    },
    {
      nome:'junin',
      livro: 'sabonete',
      preco: '2'
    },
    {
      nome:'pedrao',
      livro: 'paodebatataaaa',
      preco: '5'
    },
    {
      nome:'lao',
      livro: 'sopa',
      preco: '5'
    },
    ]
  }
  
  submitListener = autor =>{
    this.setState({ autores:[...this.state.autores, autor] })
  }

  removeAutor = index =>{
    const {autores} = this.state
    this.setState(
      {
        autores : autores.filter((autor, posiAtual) =>{
          console.log(index, posiAtual);
          return posiAtual !== index ;
        })
      }

    );


  }
  
  render() {  
    return (
      <div className="App">
        <>
          <Tabela autor = { this.state.autores } removeAutor = {this.removeAutor}/>
          <Form submitListener={this.submitListener}/>
        </>
      </div>
    );
  }

}

export default App;
