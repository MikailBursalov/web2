'use client'
import {
  GoogleMap,
  LoadScript,
  Marker,
  Autocomplete,
} from '@react-google-maps/api'
import { useRef, useState } from 'react'

const containerStyle = {
  width: '100%',
  height: '300px',
  borderRadius: '12px',
  marginTop: '10px',
}

const defaultCenter = {
  lat: 55.751244,
  lng: 37.618423,
}

export const LocationPicker = ({ onLocationSelect }) => {
  const [center, setCenter] = useState(defaultCenter)
  const [marker, setMarker] = useState(null)
  const autoCompleteRef = useRef(null)

  const handlePlaceChanged = () => {
    const place = autoCompleteRef.current.getPlace()
    if (place?.geometry?.location) {
      const lat = place.geometry.location.lat()
      const lng = place.geometry.location.lng()

      setCenter({ lat, lng })
      setMarker({ lat, lng })

      const address = place.formatted_address || place.name

      onLocationSelect({
        address,
        lat,
        lng,
        city:
          place.address_components?.find((x) => x.types.includes('locality'))
            ?.long_name || null,
        district:
          place.address_components?.find((x) =>
            x.types.includes('administrative_area_level_2')
          )?.long_name || null,
        microDistrict:
          place.address_components?.find((x) => x.types.includes('sublocality'))
            ?.long_name || null,
      })
    }
  }

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      libraries={['places']}
    >
      <div className="relative z-10">
        <Autocomplete
          onLoad={(ref) => (autoCompleteRef.current = ref)}
          onPlaceChanged={handlePlaceChanged}
        >
          <input
            type="text"
            placeholder="Поиск местоположения..."
            className="w-full px-4 py-2 mb-2 border border-blue-500 rounded-md"
          />
        </Autocomplete>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          onClick={(e) => {
            const lat = e.latLng.lat()
            const lng = e.latLng.lng()
            setMarker({ lat, lng })
            setCenter({ lat, lng })
            onLocationSelect({
              address: null,
              lat,
              lng,
              city: null,
              district: null,
              microDistrict: null,
            })
          }}
        >
          {marker && <Marker position={marker} />}
        </GoogleMap>
      </div>
    </LoadScript>
  )
}
