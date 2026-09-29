import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MonumentMarker from './MonumentMarker'
import delhiMonuments from '../data/delhi/monuments'

function Map() {
  return (
    <MapContainer
      center={[28.6139, 77.2090]}
      zoom={12}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {delhiMonuments.map(monument => (
        <MonumentMarker
          key={monument.id}
          monument={monument}
        />
      ))}
    </MapContainer>
  )
}

export default Map