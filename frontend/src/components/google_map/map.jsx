import { MapContainer, Marker, TileLayer } from "react-leaflet"
import { MapWrapper } from './styled'

const Location = props => {

    return (
        <MapWrapper>
            <MapContainer  center={[46.8182, 8.2275]} zoom={5}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[props.lat, props.lon]}/>
            </MapContainer>
        </MapWrapper>
    )
}

export default Location