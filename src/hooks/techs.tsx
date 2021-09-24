import React, { createContext, useCallback, useContext, useState } from 'react';

import api from '../services/api';

import img1 from '../assets/techs/csharp.png';
import img2 from '../assets/techs/java.png';
import img3 from '../assets/techs/php.png';
import img4 from '../assets/techs/python.png';
import img5 from '../assets/techs/react.png';
import img6 from '../assets/techs/ruby.png';
import img7 from '../assets/techs/uiux.png';
import img8 from '../assets/techs/qa.png';
import img9 from '../assets/techs/temp1.png';
import img10 from '../assets/techs/temp2.png';

interface Tech {
  id: number;
  logo: string;
  name: string;
}

type TechsState = Tech[];

type TechsContextData = {
  techs: TechsState;
  selectedTech?: Tech;
  fetchTechs(): Promise<void>;
  selectTech(techId: number): Promise<void>;
};

const TechsContext = createContext<TechsContextData>({} as TechsContextData);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const tempMiddleware = (rawData: any[]): TechsState =>
  rawData.map((value: Tech) => {
    let image: string;

    switch (value.name) {
      case 'C#':
        image = img1;
        break;

      case 'Java':
        image = img2;
        break;

      case 'PHP':
        image = img3;
        break;

      case 'Python':
        image = img4;
        break;

      case 'React':
        image = img5;
        break;

      case 'Ruby on Rails':
        image = img6;
        break;

      case 'UX/UI':
        image = img7;
        break;

      case 'QA':
        image = img8;
        break;

      case 'DevOps':
        image = img9;
        break;

      case 'Quality Assurance':
        image = img10;
        break;

      default:
        image = img1;
    }

    return {
      ...value,
      logo: image,
    };
  });

const TechsProvider: React.FC = ({ children }) => {
  const [techs, setTechs] = useState<TechsState>([]);
  const [selectedTech, setSelectedTech] = useState<Tech>({
    id: 0,
    logo: '',
    name: '',
  });

  const fetchTechs = useCallback(async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response = await api.get('categories');

    const techsDataRaw: TechsState = [...response.data];

    const techsData = tempMiddleware(techsDataRaw);

    localStorage.setItem('@DevsMap:techs', JSON.stringify(techsData));

    setTechs(techsData);
  }, []);

  const selectTech = useCallback(
    async (techId: number) => {
      const tech = techs.find((value) => value.id === techId);
      tech && setSelectedTech(tech);
    },
    [techs],
  );

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
