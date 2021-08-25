import React from 'react';
import { Map, GoogleApiWrapper, IMapProps, Marker } from 'google-maps-react';
import { conteinerMapStyles, mapStyle } from './mapStyle';

interface Position {
  lat: number;
  lng: number;
}
interface CityJobs {
  title: string;
  name: string;
  position: Position;
}

interface Job {
  title: string;
}
interface MapContainerProps extends IMapProps {
  citiesJobs: CityJobs[];
  jobs: Job[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapLoaded: any = (mapProps: any, map: any) => {
  map.setOptions({
    styles: mapStyle,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
  });
};

const MapContainer: React.FC<MapContainerProps> = ({
  google,
  citiesJobs,
  jobs,
}) => (
  <Map
    google={google}
    containerStyle={conteinerMapStyles}
    initialCenter={{ lat: -3.733358, lng: -38.526143 }}
    onReady={(mapProps, map) => mapLoaded(mapProps, map)}
  >
    {citiesJobs.map(({ title, name, position }) => (
      <Marker
        // eslint-disable-next-line max-len
        // FIXME: This library doesn't support ts properly, we got looking for a better one or do one of our own
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        title={title}
        name={name}
        position={position}
      >
        <span>Teste</span>
      </Marker>
    ))}
  </Map>
);

export default GoogleApiWrapper((props) => ({
  apiKey: 'AIzaSyCEfMilvAYXbiy8uYvmhggUrgDJAAzqzvY',
}))(MapContainer);
