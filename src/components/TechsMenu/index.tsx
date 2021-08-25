import React from 'react';
import { Container } from './styles';

export interface Tech {
  id: number;
  name: string;
  logo: string;
}

export interface TechsMenuProps {
  techs: Tech[];
}

const TechsMenu: React.FC<TechsMenuProps> = ({ techs }) => (
  <Container>
    {techs.map(({ id, name, logo }) => (
      <img key={id} alt={`${name} Logo`} src={logo} />
    ))}
  </Container>
);

export default TechsMenu;
