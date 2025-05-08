'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Solución para iconos desaparecidos en React-Leaflet v4+
const DefaultIcon = L.icon({
  iconUrl: '/images/icons/localizacion.png',
  iconRetinaUrl: '/images/icons/localizacion.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 30],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Estructura de datos más mantenible
const locations = [
  {
    name: "INSOEL",
    position: [20.1407, -101.1905]
  },
  {
    name: "Solena",
    position: [21.088806, -101.594063]
  },
  {
    name: "Unidad de Alta Tecnología UNAM",
    position: [20.70530139329381, -100.45089263321037]
  },
  {
    name: "Irapuato",
    position: [20.661035785452782, -101.30793830053615]
  }
];

export default function Map() {
  useEffect(() => {
    // Configurar icono por defecto
    L.Marker.prototype.options.icon = DefaultIcon;
  }, []);

  return (
    <MapContainer 
      center={locations[0].position} 
      zoom={8} 
      style={{ height: '500px', width: '500px' }}
      className="rounded-lg shadow-md"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marcadores generados dinámicamente */}
      {locations.map((loc, index) => (
        <Marker key={`marker-${index}`} position={loc.position}>
          <Popup>
            {loc.name}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}