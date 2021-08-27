import React, { createContext, useCallback, useContext, useState } from 'react';

// import api from '../services/api';
import api from '../services/fake/api';

interface Tech {
  id: number;
  logo: string;
  name: string;
}

type TechsState = Tech[];

type TechsContextData = {
  techs: TechsState;
  fetchTechs(): Promise<void>;
};

const TechsContext = createContext<TechsContextData>({} as TechsContextData);

const TechsProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<TechsState>([]);

  const fetchTechs = useCallback(async () => {
    const response = await api.get('category');

    const techs: TechsState = [...response.data];

    localStorage.setItem('@DevsMap:techs', JSON.stringify(techs));

    setData(techs);
  }, []);

  return (
    <TechsContext.Provider value={{ techs: data, fetchTechs }}>
      {children}
    </TechsContext.Provider>
  );
};

function useTechs(): TechsContextData {
  const context = useContext(TechsContext);

  if (!context) {
    throw new Error('useTechs must be used within an TechsProvider');
  }

  // context.fetchTechs();

  return context;
}

export { TechsProvider, useTechs };
