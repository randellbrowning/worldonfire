import { Icon } from '@iconify/react'
import fireIcon from '@iconify/icons-mdi/fire-alert'
// npm install --save-dev @iconify/react @iconify-icons/emojione
import volcanoIcon from '@iconify-icons/emojione/volcano';


const LocationMarker = ({ lat, lng, category, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={(category === 8)? fireIcon : volcanoIcon} className="location-icon" />
        </div>
    )
}

export default LocationMarker
