/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useCallback, useEffect } from 'react';
import MapContainer from '../../components/MapContainer';
import TechsMenu from '../../components/TechsMenu';
import { Content, Header, CarouselItens, Container } from './styles';

import logoImg from '../../assets/logo/logotype/dark-theme.svg';
import { useTechs } from '../../hooks/techs';
import { useBotJobs } from '../../hooks/botJobs';

const Map: React.FC = () => {
  const { fetchTechs } = useTechs();
  const { fetchBotJobs } = useBotJobs();
  const localTechsRaw = localStorage.getItem('@DevsMap:techs');
  const localTechs = !!localTechsRaw && JSON.parse(localTechsRaw);

  useEffect(() => {
    fetchTechs();
  }, []);

  useEffect(() => {
    fetchBotJobs();
  }, []);

  const handleTechChange = useCallback((id) => {
    fetchBotJobs(id);
  }, []);

  const { techs } = useTechs();
  const { botJobs } = useBotJobs();

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="devsmap" />
      </Header>
      <CarouselItens>
        <TechsMenu
          techs={localTechs || techs}
          filterByTech={(id) => handleTechChange(id)}
        />
      </CarouselItens>
      <Content>
        <MapContainer botJobs={botJobs} companiesJobs={[]} />
      </Content>
    </Container>
  );
};

export default Map;
