import { Marker, Popup } from 'react-leaflet'

function MonumentMarker({ monument }) {
  return (
    <Marker position={[monument.latitude, monument.longitude]}>
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