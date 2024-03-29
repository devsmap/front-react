import React, { useCallback } from 'react';
import { Container } from './styles';

export interface Tech {
  id: number;
  name: string;
  logo: string;
}

export interface TechsMenuProps {
  techs: Tech[];
  filterByTech?: (value?: number) => Promise<void>;
}

const TechsMenu: React.FC<TechsMenuProps> = ({ techs, filterByTech }) => {
  const handleTechClick = useCallback(
    (id) => {
      filterByTech && filterByTech(id);
    },
    [filterByTech],
  );

  return (
    <Container>
      {techs.map(({ id, name, logo }) => (
        <a key={id} href="#/" onClick={() => handleTechClick(id)}>
          <img alt={`${name} Logo`} src={logo} />
        </a>
      ))}
    </Container>
  );
};

export default TechsMenu;
