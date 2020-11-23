import React,{ useState } from 'react';
import ReactMapGL from "react-map-gl";

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
            </ReactMapGL>
        </div>
    );
}

export default Mapa
