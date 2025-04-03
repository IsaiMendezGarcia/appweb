'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default function Map() {
  // Coordenadas Insoel
  const position = [20.1407, -101.1905];
  // Coordenadas Solena
  const posSolena = [21.088806, -101.594063];
  // Unidad de Alta Tecnología UNAM
  const PosUAT = [20.70530139329381, -100.45089263321037];
  // Irapuato
  const PosIRP = [20.661035785452782, -101.30793830053615]

  return (
    <MapContainer 
      center={position} 
      zoom={8} 
      style={{ height: '500px', width: '500px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      /*-------------------------Macadores------------------------*/
      <Marker position={position}>
        <Popup>
            INSOEL
        </Popup>
      </Marker>
    
      <Marker position={posSolena}>
        <Popup>
            Solena
        </Popup>
      </Marker>

      <Marker position={PosUAT}>
        <Popup>
        Unidad de Alta Tecnología UNAM
        </Popup>
      </Marker>

      <Marker position={PosIRP}>
        <Popup>
        Irapuato
        </Popup>
      </Marker>
    </MapContainer>
  );
}