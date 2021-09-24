import React, { useRef, useState } from 'react';
import GoogleMapReact, { Props as MapProps, Coords } from 'google-map-react';
import useSupercluster from 'use-supercluster';
// import MultiBotJobsMarker, {
//   TechCount,
// } from './components/Markers/MultiBotJobsMarker';
import { lighten } from 'polished';
import SimpleBotJobsMarker, {
  TechCount,
} from './components/Markers/SimpleBotJobsMarker';
import { mapStyle } from './mapStyle';

interface BotJobs {
  city_id: number;
  id: number;
  techsCount: TechCount[];
  totalCount: number;
  location: Coords;
}

interface Job {
  title: string;
}
interface MapContainerProps extends MapProps {
  botJobs: BotJobs[];
  // companiesJobs: Job[];
  clickBotJob(techId: number, companyId: number): Promise<void>;
}

const MapContainer: React.FC<MapContainerProps> = ({
  botJobs,
  // companiesJobs,
  clickBotJob,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>();
  const [boundsState, setBoundsState] = useState<number[] | null>(null);
  const [zoomSize, setZoomSize] = useState(10);
  const [isSomeMarkerHovered, setIsSomeMarkerHovered] =
    useState<boolean>(false);

  const points = botJobs.map((botJob) => ({
    type: 'Feature',
    properties: {
      cluster: false,
      botJobCount: botJob.totalCount,
      techsCount: botJob.techsCount,
      city_id: botJob.city_id,
    },
    geometry: {
      type: 'Point',
      coordinates: [botJob.location.lng, botJob.location.lat],
    },
  }));

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds: boundsState,
    zoom: zoomSize,
    options: {
      radius: 75,
      maxZoom: 20,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      map: (props: any) => ({
        botJobCount: props.botJobCount,
      }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      reduce: (accumulated: any, props: any) => {
        // eslint-disable-next-line no-param-reassign
        accumulated.botJobCount += props.botJobCount;
      },
    },
  });

  const defaultLocation: Coords = { lat: 37.7576948, lng: -122.4726194 };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleApiLoaded = (map: any): void => {
    mapRef.current = map;

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        map.setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  };

  const getMarkerWidth = (
    botJobCount: number,
    minSize = 15,
    maxSize = 40,
  ): number => {
    const markerWidth = parseInt(
      (minSize + maxSize * Math.min(1, botJobCount / 50)).toString(),
      10,
    );

    return markerWidth;
  };

  const getMarkerColor = (botJobCount: number, color = '#7367f0'): string => {
    const multiplier = 0.08 - 0.08 * Math.min(1, botJobCount / 50);
    return lighten(multiplier, color);
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
        onChange={({ zoom, bounds }) => {
          setZoomSize(zoom);
          setBoundsState([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat,
          ]);
        }}
      >
        {clusters.map((cluster, index) => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const {
            cluster: isCluster,
            botJobCount,
            techsCount,
            city_id,
          } = cluster.properties;

          if (!isCluster) {
            return (
              <SimpleBotJobsMarker
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                lat={latitude}
                lng={longitude}
                markerWidth={getMarkerWidth(botJobCount)}
                backgroundColor={getMarkerColor(botJobCount)}
                techsCount={botJobCount}
                // TODO: Fazer para várias techs
                clickBotJob={async () => {
                  clickBotJob(techsCount[0].tech.id, city_id);
                }}
                disable={isSomeMarkerHovered}
                hover={(value) => setIsSomeMarkerHovered(value)}
              />
            );
          }
          return (
            <SimpleBotJobsMarker
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              lat={latitude}
              lng={longitude}
              techsCount={botJobCount}
              backgroundColor={getMarkerColor(botJobCount)}
              markerWidth={getMarkerWidth(botJobCount)}
              clickBotJob={async () => {
                const expansionZoom = Math.min(
                  supercluster.getClusterExpansionZoom(cluster.id),
                  20,
                );
                mapRef.current.setZoom(expansionZoom);
                mapRef.current.panTo({ lat: latitude, lng: longitude });
              }}
              disable={isSomeMarkerHovered}
              hover={(value) => setIsSomeMarkerHovered(value)}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default MapContainer;
