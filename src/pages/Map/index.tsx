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
  const { fetchBotJobs } = useBotJobs();
  const { fetchTechs } = useTechs();
  const { open: openSidebar } = useSideBar();
  const localTechsRaw = localStorage.getItem('@DevsMap:techs');
  const localTechs = !!localTechsRaw && JSON.parse(localTechsRaw);

  useEffect(() => {
    fetchTechs();
    fetchBotJobs();
  }, []);

  const { techs } = useTechs();
  const { botJobs } = useBotJobs();

  const handleTechChange = useCallback(async (id) => {
    const tech = localTechs.find((value: any) => value.id === id);
    await fetchBotJobs(tech);
  }, []);

  const handleOpenBotJobs = useCallback(
    async (techId, companyId) => {
      // const response = await api.get(`jobs/${techId}/${companyId}`);
      const temp = [
        {
          title: 'Título',
          company: 'Empresa X',
          description:
            'Descrição, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
          via: 'via',
          link: 'www.google.com',
          published_at: new Date(2021, 4, 18),
          time_zone: '+3',
          gogole_job_id: '0',
        },
        {
          title: 'Título 2',
          company: 'Empresa Y',
          description:
            'Descrição, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
          via: 'via',
          link: 'www.google.com',
          published_at: new Date(2021, 4, 18),
          time_zone: '+3',
          gogole_job_id: '1',
        },
      ];

      const jobsList: React.FC = () => <JobsList jobsList={temp} />;

      await openSidebar(jobsList);
    },
    [openSidebar],
  );

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
          clickBotJob={async (techId, companyId) => {
            handleOpenBotJobs(techId, companyId);
          }}
          companiesJobs={[]}
        />
      </Content>
    </Container>
  );
};

export default Map;
