import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

const monumentIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

function MonumentMarker({ monument }) {
  return (
    <Marker
      position={[monument.latitude, monument.longitude]}
      icon={monumentIcon}
    >
      <Popup>
        <h3>{monument.name}</h3>
        <p>{monument.period}</p>
        <p>{monument.year}</p>
        <p>{monument.description}</p>
      </Popup>
    </Marker>
  )
}

export default MonumentMarker