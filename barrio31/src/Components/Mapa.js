import React,{ useState } from 'react';
import ReactMapGL, {NavigationControl, FullscreenControl, GeolocateControl} from 'react-map-gl';
import Boton from './Boton.js';
import './Mapa.css';


function Mapa(props) {
    const [viewport, setViewport] = useState({
        latitude: -34.583634050773775,
        longitude: -58.3791160583496,
        width: '80vw',
        height: '80vh',
        zoom: 14.6
    });

    const geolocateStyle = {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 10
    };
  
    return (
        <div>
            <ReactMapGL {...viewport}
            mapboxApiAccessToken="pk.eyJ1IjoiYXhlbDAzIiwiYSI6ImNrZTR1emdybzB0d2QyeXBiYWg0cDJ3ODcifQ.bEVJT1JeOq7rh1bmhXRnjA"
            mapStyle={props.selectStyle}
            onViewportChange={viewport =>{
            setViewport(viewport);
            }}>
                Barrio 31
                <GeolocateControl
                    style={geolocateStyle}
                    positionOptions={{enableHighAccuracy: true}}
                    trackUserLocation={true}
                    auto={true}
                />
                <div style={{position: 'absolute', right: 0, top: 34, margin: 10}}>
                    <NavigationControl />
                </div>
                <div style={{position: 'absolute', right: 0, top: 126, margin: 10}}>
                    <FullscreenControl container={document.querySelector('body')} />
                </div>

            </ReactMapGL>
            <Boton cambiarEstilos={props.cambiarEstilos} />
        </div>
    );
}

export default Mapa
