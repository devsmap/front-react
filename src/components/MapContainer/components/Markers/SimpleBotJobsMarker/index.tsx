import React, { useEffect, useState } from 'react';
import { Container } from './styles';

export interface Tech {
  id: number;
  name: string;
  logo?: string;
  color: string;
}

export interface TechCount {
  tech: Tech;
  count: number;
}

interface SimpleBotJobsMarkerProps {
  lat: number;
  lng: number;
  markerWidth?: number;
  techsCount: number;
  backgroundColor: string;
  clickBotJob(): Promise<void>;
}

const SimpleBotJobsMarker: React.FC<SimpleBotJobsMarkerProps> = ({
  techsCount = 10,
  markerWidth = 50,
  backgroundColor,
  clickBotJob,
}) => (
  <a href="#/" onClick={() => clickBotJob()}>
    <div
      style={{
        position: 'absolute',
        left: markerWidth / -2,
        top: markerWidth / -2,
      }}
    >
      <Container markerWidth={markerWidth} backgroundColor={backgroundColor}>
        {techsCount}
      </Container>
    </div>
  </a>
);

export default SimpleBotJobsMarker;
