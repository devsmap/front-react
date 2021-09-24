import React, { createContext, useCallback, useContext, useState } from 'react';
import { Coords } from 'google-map-react';

import api from '../services/api';

export interface Tech {
  id: number;
  name: string;
  logo: string;
  color: string;
}

export interface TechCount {
  // FIXME: Aqui deve existir só o id da tech
  tech: Tech;
  count: number;
}

interface BotJob {
  id: number;
  city_id: number;
  location: Coords;
  techsCount: TechCount[];
  totalCount: number;
}

type BotJobsState = BotJob[];

type BotJobsContextData = {
  botJobs: BotJobsState;
  fetchBotJobs(value?: Partial<Tech>): Promise<void>;
};

const BotJobsContext = createContext<BotJobsContextData>(
  {} as BotJobsContextData,
);

const formatBotJobMiddleware = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rawData: any,
  name: string,
  id: number,
): BotJobsState =>
  // TODO: Adicionar a tech vinda do contexto
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rawData.map((value: any) => ({
    ...value,
    totalCount: value.total,
    location: {
      lat: value.latitude,
      lng: value.longitude,
    },
    techsCount: [
      {
        count: value.total,
        tech: {
          id,
          color: '#FFA1A1',
          name,
        },
      },
    ],
  }));

const BotJobsProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<BotJobsState>([]);

  const fetchBotJobs = useCallback(async (value = null) => {
    if (!value) return;

    const response = await api.get(`pins/${value.id}/default`);

    // const botJobsRaw: BotJobsState = [...response.data.data];

    const botJobs: BotJobsState = formatBotJobMiddleware(
      response,
      value.name,
      value.id,
    );

    setData(botJobs);
  }, []);

  return (
    <BotJobsContext.Provider value={{ botJobs: data, fetchBotJobs }}>
      {children}
    </BotJobsContext.Provider>
  );
};

function useBotJobs(): BotJobsContextData {
  const context = useContext(BotJobsContext);

  if (!context) {
    throw new Error('useBotJobs must be used within an BotJobsProvider');
  }

  return context;
}

export { BotJobsProvider, useBotJobs };
