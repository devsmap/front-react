import React from 'react';
import GoogleMapReact, { Props as MapProps, Coords } from 'google-map-react';
import BotJobsMarker from './components/Markers/BotJobsMarker';
import { mapStyle } from './mapStyle';

interface CityJobs {
  title: string;
  name: string;
  position: Coords;
}

interface Job {
  title: string;
}
interface MapContainerProps extends MapProps {
  citiesJobs: CityJobs[];
  jobs: Job[];
}

const MapContainer: React.FC<MapContainerProps> = ({ citiesJobs, jobs }) => {
  const defaultLocation: Coords = { lat: 37.7576948, lng: -122.4726194 };

  const handleApiLoaded = (map: any): void => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        map.setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY ?? '' }}
        defaultCenter={defaultLocation}
        defaultZoom={11}
        options={{
          styles: mapStyle,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => handleApiLoaded(map)}
      >
        <BotJobsMarker lat={-3.7374975} lng={-38.5111564} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default MapContainer;
