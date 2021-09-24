import React, { useState, MouseEvent } from 'react';
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
  disable?: boolean;
  clickBotJob(): Promise<void>;
  hover(value: boolean): void;
}

const SimpleBotJobsMarker: React.FC<SimpleBotJobsMarkerProps> = ({
  techsCount = 10,
  markerWidth = 50,
  backgroundColor,
  disable,
  clickBotJob,
  hover,
}) => {
  const [hovered, setHoreved] = useState<boolean>(false);

  const handleMouseHover = (value: boolean): void => {
    setHoreved(value);
    hover(value);
  };

  return (
    <a href="#/" onClick={() => clickBotJob()}>
      <div
        style={{
          position: 'absolute',
          left: markerWidth / -2,
          top: markerWidth / -2,
          zIndex: hovered ? 10000000 : techsCount,
          borderRadius: '50%',
        }}
        onMouseOver={() => handleMouseHover(true)}
        onFocus={() => handleMouseHover(true)}
        onMouseOut={() => handleMouseHover(false)}
        onBlur={() => handleMouseHover(false)}
      >
        <Container
          markerWidth={markerWidth}
          backgroundColor={backgroundColor}
          disable={disable}
        >
          {techsCount}
        </Container>
      </div>
    </a>
  );
};

export default SimpleBotJobsMarker;
