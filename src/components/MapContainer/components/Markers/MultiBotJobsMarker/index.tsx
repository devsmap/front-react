import React, { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';
import { Container } from './styles';
import { plotOptions, dataLabels } from './plotOptions';

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

interface MultiBotJobsMarkerProps {
  lat: number;
  lng: number;
  markerWidth?: number;
  techsCount: TechCount[];
  clickBotJob(): Promise<void>;
}

// const donutColors = {
//   series1: '#8BC34A',
//   series2: '#00D4BD',
//   series3: '#826BF8',
//   series4: '#2B9BF4',
//   series5: '#FFA1A1',

const MultiBotJobsMarker: React.FC<MultiBotJobsMarkerProps> = ({
  techsCount,
  markerWidth = 150,
  clickBotJob,
}) => {
  const [options, setOptions] = useState<ApexCharts.ApexOptions>({});
  const [series, setSeries] = useState<number[]>([]);

  useEffect(() => {
    setOptions({
      legend: {
        show: false,
      },
      labels: techsCount.map((techCount) => techCount.tech.name),

      colors: techsCount.map((techCount) => techCount.tech.color),
      dataLabels,
      plotOptions,
    });

    setSeries(techsCount.map((techCount) => techCount.count));
  }, [techsCount]);

  return (
    <a href="#/" onClick={() => clickBotJob()}>
      <div style={{ position: 'absolute', left: -75, top: -50 }}>
        <Chart
          options={options}
          series={series}
          type="donut"
          width="150"
          height="100"
        />
      </div>
    </a>
  );
};

export default MultiBotJobsMarker;
