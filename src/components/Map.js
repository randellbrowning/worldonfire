import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev => {
        var lat, lon = 0;

        if((ev.categories[0].id === 8) || (ev.categories[0].id === 12)) {
            if(Array.isArray(ev.geometries[0].coordinates[0])){
            lat = ev.geometries[0].coordinates[0][0][1];
            lon = ev.geometries[0].coordinates[0][0][0];
        }else{
            lat = ev.geometries[0].coordinates[1];
            lon = ev.geometries[0].coordinates[0];
        }
        return <LocationMarker lat={lat} lng={lon} category={ev.categories[0].id} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
    }  
            
    
        //return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'Enter Your own Google Maps key' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map
