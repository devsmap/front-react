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
  selectedTech: number;
  fetchTechs(): Promise<void>;
  selectTech(techId: number): Promise<void>;
};

const TechsContext = createContext<TechsContextData>({} as TechsContextData);

const TechsProvider: React.FC = ({ children }) => {
  const [techs, setTechs] = useState<TechsState>([]);
  const [selectedTech, setSelectedTech] = useState<number>(0);

  const fetchTechs = useCallback(async () => {
    const response = await api.get('category');

    const techsData: TechsState = [...response.data];

    localStorage.setItem('@DevsMap:techs', JSON.stringify(techsData));

    setTechs(techsData);
  }, []);

  const selectTech = useCallback(async (techId) => {
    setSelectedTech(techId);
  }, []);

  return (
    <TechsContext.Provider
      value={{
        techs,
        selectedTech,
        fetchTechs,
        selectTech,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};

function useTechs(): TechsContextData {
  const context = useContext(TechsContext);

  if (!context) {
    throw new Error('useTechs must be used within an TechsProvider');
  }

  return context;
}

export { TechsProvider, useTechs };
