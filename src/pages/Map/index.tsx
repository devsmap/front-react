import React, { useCallback, useEffect } from 'react';
import MapContainer from '../../components/MapContainer';
import TechsMenu from '../../components/TechsMenu';
import JobsList from '../../components/JobsList';
import JobDetail, { JobDetailProps } from '../../components/JobDetail';
import { Content, Header, CarouselItens, Container } from './styles';

import logoImg from '../../assets/logo/logotype/dark-theme.svg';
import { useTechs } from '../../hooks/techs';
import { useBotJobs } from '../../hooks/botJobs';
import { useSideBar } from '../../hooks/sideBar';

import api from '../../services/api';

const Map: React.FC = () => {
  const { fetchBotJobs } = useBotJobs();
  const { fetchTechs } = useTechs();
  const { open: openSidebar, openSub: openSubSidebar } = useSideBar();
  const localTechsRaw = localStorage.getItem('@DevsMap:techs');
  const localTechs = !!localTechsRaw && JSON.parse(localTechsRaw);

  useEffect(() => {
    fetchTechs();
    fetchBotJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { techs } = useTechs();
  const { botJobs } = useBotJobs();

  const handleTechChange = useCallback(async (id) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tech = localTechs.find((value: any) => value.id === id);
    await fetchBotJobs(tech);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenBotJob = useCallback(
    async (job: JobDetailProps) => {
      const jobDetail: React.FC = () => <JobDetail {...job} />;

      await openSubSidebar(jobDetail);
    },
    [openSubSidebar],
  );

  const handleOpenBotJobs = useCallback(
    async (techId, companyId) => {
      const response = await api.get(`jobs/${techId}/${companyId}`);

      const jobsList: React.FC = () => (
        <JobsList jobsList={response.data.data} openJob={handleOpenBotJob} />
      );
      await openSidebar(jobsList);
    },
    [handleOpenBotJob, openSidebar],
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
          // companiesJobs={[]}
        />
      </Content>
    </Container>
  );
};

export default Map;
