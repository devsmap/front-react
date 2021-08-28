import React from 'react';
import GoogleMapReact, { Props as MapProps, Coords } from 'google-map-react';
import BotJobsMarker, { TechCount } from './components/Markers/BotJobsMarker';
import SideBar from '../SideBar';
import { mapStyle } from './mapStyle';

interface BotJobs {
  techsCount: TechCount[];
  location: Coords;
}

interface Job {
  title: string;
}
interface MapContainerProps extends MapProps {
  botJobs: BotJobs[];
  companiesJobs: Job[];
}

const MapContainer: React.FC<MapContainerProps> = ({
  botJobs,
  companiesJobs,
}) => {
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
      <SideBar />

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
        {botJobs.map((jobs) => (
          <BotJobsMarker
            key={jobs.location.lat + jobs.location.lng}
            lat={jobs.location.lat}
            lng={jobs.location.lng}
            techsCount={jobs.techsCount}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default MapContainer;
