import React,{ useState } from 'react';
import ReactMapGL from "react-map-gl";



export default function App(){
  const [viewport, setViewport] = useState({
    latitude: -34.58224781899445,
    longitude: -58.3790560432247,
    width: '100vw',
    height: '100vh',
    zoom: 15
  });
  
  return (
  <div>
    <ReactMapGL {...viewport}
    mapboxApiAccessToken="pk.eyJ1IjoiYXhlbDAzIiwiYSI6ImNrZTR1emdybzB0d2QyeXBiYWg0cDJ3ODcifQ.bEVJT1JeOq7rh1bmhXRnjA"
    mapStyle="mapbox://styles/axel03/cke4v99cb1jpk19mpma6mkowo"
    onViewportChange={viewport =>{
      setViewport(viewport);
    }}>
     
    </ReactMapGL>
  </div>
  );
}
