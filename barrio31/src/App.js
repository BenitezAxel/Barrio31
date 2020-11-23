import React, {Component} from 'react';
import Boton from './Components/Boton.js';
import Mapa from  './Components/Mapa.js';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectStyle: 'mapbox://styles/axel03/ckhtpy1qz46ry19nqn6sd9wsp',
            sectores: 'mapbox://styles/axel03/ckhtpy1qz46ry19nqn6sd9wsp',
            manzanas: 'mapbox://styles/axel03/cke4v99cb1jpk19mpma6mkowo'
        };
    }

    
    cambiarEstilos = () => {

        let selectStyle = this.state.selectStyle;
        const sectores = this.state.sectores;
        const manzanas = this.state.manzanas;

        if(selectStyle === sectores){
            selectStyle = manzanas
            this.setState({
                selectStyle
            });
        }else{
            selectStyle = sectores
            this.setState({
                selectStyle
            });
        }
    }

    render(){
        return (
            <div>
            <Mapa selectStyle={this.state.selectStyle} />
            <Boton cambiarEstilos={this.cambiarEstilos} />
            </div>
        )
    }
}

export default App

