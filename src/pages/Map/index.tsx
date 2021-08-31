import React, { useCallback, useEffect } from 'react';
import MapContainer from '../../components/MapContainer';
import TechsMenu from '../../components/TechsMenu';
import JobsList from '../../components/JobsList';
import { Content, Header, CarouselItens, Container } from './styles';

import logoImg from '../../assets/logo/logotype/dark-theme.svg';
import { useTechs } from '../../hooks/techs';
import { useBotJobs } from '../../hooks/botJobs';
import { useSideBar } from '../../hooks/sideBar';

const Map: React.FC = () => {
  const { fetchTechs } = useTechs();
  const { fetchBotJobs } = useBotJobs();
  const { open: openSidebar } = useSideBar();
  const localTechsRaw = localStorage.getItem('@DevsMap:techs');
  const localTechs = !!localTechsRaw && JSON.parse(localTechsRaw);

  useEffect(() => {
    fetchTechs();
    fetchBotJobs();
  }, []);

  const handleTechChange = useCallback(async (id) => {
    await fetchBotJobs(id);
  }, []);

  const handleOpenSideBar = useCallback(async (id) => {
    const jobsList: React.FC = () => <JobsList jobsList={[]} />;

    await openSidebar(jobsList);
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
          filterByTech={async (id) => handleTechChange(id)}
        />
      </CarouselItens>
      <Content>
        <MapContainer
          botJobs={botJobs}
          clickBotJob={async (id) => handleOpenSideBar(id)}
          companiesJobs={[]}
        />
      </Content>
    </Container>
  );
};

export default Map;
