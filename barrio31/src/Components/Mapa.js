import React,{ useState } from 'react';
import ReactMapGL, {NavigationControl, FullscreenControl, GeolocateControl} from 'react-map-gl';
import Boton from './Boton.js';


function Mapa(props) {
    const [viewport, setViewport] = useState({
        latitude: -34.583634050773775,
        longitude: -58.3791160583496,
        width: '80vw',
        height: '80vh',
        zoom: 14.6
    });
  
    return (
        <div>
            <ReactMapGL {...viewport}
            mapboxApiAccessToken="pk.eyJ1IjoiYXhlbDAzIiwiYSI6ImNrZTR1emdybzB0d2QyeXBiYWg0cDJ3ODcifQ.bEVJT1JeOq7rh1bmhXRnjA"
            mapStyle={props.selectStyle}
            onViewportChange={viewport =>{
            setViewport(viewport);
            }}>
                Barrio 31
                <div style={{position: 'absolute', right: 0}}>
                    <NavigationControl />
                </div>
                <div style={{position: 'absolute', right: 0, top: 120}}>
                    <FullscreenControl />
                </div>
                    <GeolocateControl
                    positionOptions={{enableHighAccuracy: false, timeout: 6000}}
                    // trackUserLocation={true}
                    // fitBoundsOptions={{maxZoom: 15}}
                    />
                <div style={{position: 'absolute', right: 0, top: 0}}>
                </div>

            </ReactMapGL>
            <Boton cambiarEstilos={props.cambiarEstilos} />
        </div>
    );
}

export default Mapa
