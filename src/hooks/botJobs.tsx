import React, { createContext, useCallback, useContext, useState } from 'react';
import { Coords } from 'google-map-react';

// import api from '../services/api';
import api from '../services/fake/api';

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
  location: Coords;
  techsCount: TechCount[];
}

type BotJobsState = BotJob[];

type BotJobsContextData = {
  botJobs: BotJobsState;
  fetchBotJobs(value?: number): Promise<void>;
};

const BotJobsContext = createContext<BotJobsContextData>(
  {} as BotJobsContextData,
);

const BotJobsProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<BotJobsState>([]);

  const fetchBotJobs = useCallback(async (value = 0) => {
    const response = await api.get('botjobs', value);

    const botJobs: BotJobsState = [...response.data];

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
