import React from 'react';
import GoogleMapReact, { Props as MapProps, Coords } from 'google-map-react';
import BotJobsMarker, { TechCount } from './components/Markers/BotJobsMarker';
import { mapStyle } from './mapStyle';

interface BotJobs {
  id: number;
  techsCount: TechCount[];
  location: Coords;
}

interface Job {
  title: string;
}
interface MapContainerProps extends MapProps {
  botJobs: BotJobs[];
  companiesJobs: Job[];
  clickBotJob(techId: number, companyId: number): Promise<void>;
}

const MapContainer: React.FC<MapContainerProps> = ({
  botJobs,
  companiesJobs,
  clickBotJob,
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
            // TODO: Fazer para várias techs
            clickBotJob={() => clickBotJob(jobs.techsCount[0].tech.id, jobs.id)}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default MapContainer;
