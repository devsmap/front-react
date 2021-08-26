import React, { useEffect } from 'react';
import MapContainer from '../../components/MapContainer';
import TechsMenu from '../../components/TechsMenu';
import { Content, Header, CarouselItens, Container } from './styles';

import logoImg from '../../assets/logo/logotype/dark-theme.svg';
import { useTechs } from '../../hooks/techs';

const Map: React.FC = () => {
  const { fetchTechs } = useTechs();
  const localTechsRaw = localStorage.getItem('@DevsMap:techs');
  const localTechs = !!localTechsRaw && JSON.parse(localTechsRaw);

  useEffect(() => {
    if (!localTechs) fetchTechs();
  });

  const { techs } = useTechs();

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="devsmap" />
      </Header>
      <CarouselItens>
        <TechsMenu techs={localTechs || techs} />
      </CarouselItens>
      <Content>
        <MapContainer botJobs={[]} companiesJobs={[]} />
      </Content>
    </Container>
  );
};

export default Map;
