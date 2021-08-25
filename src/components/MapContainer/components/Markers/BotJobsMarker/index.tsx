import React from 'react';

const BotJobsMarker: React.FC<{ lat: number; lng: number; text: string }> = ({
  text,
}) => <div>{text}</div>;

export default BotJobsMarker;
