import React from 'react';
import { Map, GoogleApiWrapper, IMapProps, Marker } from 'google-maps-react';
import { conteinerMapStyles, mapStyle } from './mapStyle';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapLoaded: any = (mapProps: any, map: any) => {
  map.setOptions({
    styles: mapStyle,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
  });
};

const MapContainer: React.FC<IMapProps> = ({ google }) => (
  <Map
    google={google}
    containerStyle={conteinerMapStyles}
    initialCenter={{ lat: -3.733358, lng: -38.526143 }}
    onReady={(mapProps, map) => mapLoaded(mapProps, map)}
  />
);

export default GoogleApiWrapper((props) => ({
  apiKey: 'AIzaSyCEfMilvAYXbiy8uYvmhggUrgDJAAzqzvY',
}))(MapContainer);
