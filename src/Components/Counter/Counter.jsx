import React from "react";

export class Counter extends React.Component {
    constructor() {
        super();
        console.log('Construindo a classe Counter!');

        this.state = { contador: 0 }
    }
    UNFAFE_componentWillMount() {
        console.log('O nosso componente contador sera montado');

    }
    componentDidMount() {
        console.log('O componente foi montado!');
        document.addEventListener('Scroll', this.consoleScroll);
       
    }
    shouldComponentUpdate(){
        return true;
    }
    UNSAFEcomponentWillUpdate() {
        console.log('O componente vai ser atualizado!');

    }
    componentDidUpdate() {
        console.log('O componente Counter foi atualizado!');
        

    }
    

    componentWillUnmount(){
        console.log('O componente sera desmontado');

        document.removeEventListener('Scroll', this.consoleScroll);
        
    }
    consoleScroll(){
        console.log('Rolando a pagina..')
    }

    render() {
        console.log('Renderizando o componente counter...')
        return (
            <div>
                <h1>{this.state.contador}</h1>

                <button onClick={() => this.setState({ contador: this.state.contador - 1 })}
                >
                    Diminuir</button>
                <button onClick={() => this.setState({ contador: this.state.contador + 1 })}
                >
                    Aumentar</button>
            </div>
        )
    }
}