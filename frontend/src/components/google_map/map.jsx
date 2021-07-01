import React from 'react'
import GoogleMapReact from 'google-map-react'
import {MapWrapper} from "./styled";
import MapLocation from "./location_pin";


const Map = ({ location, zoomLevel }) => {

    return (
        <MapWrapper>
            <div className="map">
                <div className="google-map">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyBG_jJSsEYcf6reCLCFlVD_Z8VyYvZQMgk' }}
                        defaultCenter={location}
                        defaultZoom={zoomLevel}
                    >
                        <MapLocation
                            lat={location.lat}
                            lng={location.lng}
                            text={location.address}
                        />
                    </GoogleMapReact>
                </div>
            </div>
        </MapWrapper>
    )
}

export default Map