import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  heigth: '100%',
};

interface MapProps {
  google: string;
}

const MapContainer: React.FC<MapProps> = ({ google }) => (
  <Map
    google={google}
    style={mapStyles}
    initialCenter={{ lat: -3.733358, lng: -38.526143 }}
  />
);

export default GoogleApiWrapper((props) => ({
  apiKey: 'AIzaSyCEfMilvAYXbiy8uYvmhggUrgDJAAzqzvY',
}))(MapContainer);
