import React from 'react';
import Mapa from  './Components/Mapa.js';
import Mapa2 from './Components/Mapa2.js';


export default function App() {
    const [viewport, setVieport] = useState({
        lalitude: 52.6376,
        longitude: -1.135171,
        width:"100vw",
        height: "100vh",
        zoom: 12
    })

  return (
    <div>
      <Mapa/>
      <Mapa2/>
    </div>
  )
}

export default App
