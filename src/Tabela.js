import React, { Component } from 'react';

const TableHead = () => {
    return (<thead>
        <tr>
            <th>autores</th>
            <th>livros</th>
            <th>precos</th>
            <th>Remover</th>
        </tr>

    </thead>
    );
}

const TableBody = props => {
    const linhas = props.autores.map((linha, index)=> {
        return(
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td><button onClick={()=>{props.removeAutor(index)}}>Remover</button></td>
            </tr>
        )
    });
    return(
        <tbody>
            {linhas}
        </tbody>
    );
    

}

class Tabela extends Component {
    render() {
        // const {  } = this.props; 
        // this.props.removeAtual = this.props.removeAtual.bind(this);
        return (
            <table>
                <TableHead />
                <TableBody autores={this.props.autor} removeAutor={this.props.removeAutor}/>
                
            </table>
        );
    }

}

export default Tabela;