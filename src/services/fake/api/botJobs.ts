import { Coords } from 'google-map-react';

export interface Tech {
  id: number;
  name: string;
  color: string;
}

export interface TechCount {
  tech: Tech;
  count: number;
}

interface BotJob {
  location: Coords;
  techsCount: TechCount[];
}
const botJobsFakeAPI = {
  get: (value = 0): BotJob[] => [
    {
      location: {
        lat: -3.7525365,
        lng: -38.5403971,
      },
      techsCount: [
        {
          count: 10,
          tech: {
            id: 1,
            color: '#FFA1A1',
            name: 'Ruby',
          },
        },
        {
          count: value ? 0 : 5,
          tech: {
            id: 1,
            color: '#826BF8',
            name: 'React',
          },
        },
        {
          count: value ? 0 : 3,
          tech: {
            id: 1,
            color: '#2B9BF4',
            name: 'PHP',
          },
        },
        {
          count: value ? 0 : 7,
          tech: {
            id: 1,
            color: '#00D4BD',
            name: 'Python',
          },
        },
      ],
    },
    {
      location: {
        lat: -7.226726,
        lng: -39.311305,
      },
      techsCount: [
        {
          count: 2,
          tech: {
            id: 1,
            color: '#FFA1A1',
            name: 'Ruby',
          },
        },
        {
          count: value ? 0 : 5,
          tech: {
            id: 1,
            color: '#826BF8',
            name: 'React',
          },
        },
        {
          count: value ? 0 : 3,
          tech: {
            id: 1,
            color: '#2B9BF4',
            name: 'PHP',
          },
        },
        {
          count: value ? 0 : 7,
          tech: {
            id: 1,
            color: '#00D4BD',
            name: 'Python',
          },
        },
        {
          count: value ? 0 : 1,
          tech: {
            id: 1,
            color: '#8BC34A',
            name: 'UI/UX',
          },
        },
      ],
    },
    {
      location: {
        lat: -8.139843,
        lng: -34.906412,
      },
      techsCount: [
        {
          count: 1,
          tech: {
            id: 1,
            color: '#FFA1A1',
            name: 'Ruby',
          },
        },
        {
          count: value ? 0 : 2,
          tech: {
            id: 1,
            color: '#2B9BF4',
            name: 'PHP',
          },
        },
        {
          count: value ? 0 : 7,
          tech: {
            id: 1,
            color: '#00D4BD',
            name: 'Python',
          },
        },
        {
          count: value ? 0 : 8,
          tech: {
            id: 1,
            color: '#8BC34A',
            name: 'UI/UX',
          },
        },
      ],
    },
  ],
};

export default botJobsFakeAPI;
