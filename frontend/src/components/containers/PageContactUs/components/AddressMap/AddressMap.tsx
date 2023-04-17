import cn from 'classnames'
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react'
import React, { FC } from 'react'
import { token } from '../../../../../data/address-map'
import './style.scss'

export type AddressMapProps = {
  google: any
  addressCoors: {
    lat: number
    lng: number
  }
  className?: string
}

export const AddressMapComponent: FC<AddressMapProps> = ({
  google,
  addressCoors,
  className,
}) => {
  return (
    <div className={cn('map-container', className)}>
      <Map
        google={google}
        initialCenter={addressCoors}
        containerStyle={{ position: 'relative', width: '100%', height: '100%' }}
      >
        {/* @ts-ignore */}
        <Marker position={addressCoors} />
      </Map>
    </div>
  )
}

export const AddressMap = GoogleApiWrapper({
  apiKey: token,
})(AddressMapComponent)
