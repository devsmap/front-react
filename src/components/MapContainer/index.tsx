import React from 'react';
import GoogleMapReact, { Props as MapProps, Coords } from 'google-map-react';
// import MultiBotJobsMarker, {
//   TechCount,
// } from './components/Markers/MultiBotJobsMarker';
import SimpleBotJobsMarker, {
  TechCount,
} from './components/Markers/SimpleBotJobsMarker';
import { mapStyle } from './mapStyle';

interface BotJobs {
  city_id: number;
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
        defaultZoom={6}
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
          // <MultiBotJobsMarker
          //   key={jobs.location.lat + jobs.location.lng}
          //   lat={jobs.location.lat}
          //   lng={jobs.location.lng}
          //   techsCount={jobs.techsCount}
          //   // TODO: Fazer para várias techs
          //   clickBotJob={async () => {
          //     clickBotJob(jobs.techsCount[0].tech.id, jobs.city_id);
          //   }}
          // />

          <SimpleBotJobsMarker
            key={jobs.location.lat + jobs.location.lng}
            lat={jobs.location.lat}
            lng={jobs.location.lng}
            techsCount={jobs.techsCount[0].count}
            // TODO: Fazer para várias techs
            clickBotJob={async () => {
              clickBotJob(jobs.techsCount[0].tech.id, jobs.city_id);
            }}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default MapContainer;
