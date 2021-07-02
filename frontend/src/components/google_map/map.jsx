import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet"
import { MapWrapper } from './styled'

const Location = props => {

    return (
        <MapWrapper>
            <MapContainer  center={[47.376888, 8.541694]} zoom={15}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[47.376888, 8.541694]}/>
            </MapContainer>
        </MapWrapper>
    )
}

export default Location