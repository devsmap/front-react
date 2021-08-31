import React from 'react';
import { Container } from './styles';
import Job, { JobProps } from './components/Job';

interface JobsListProps {
  jobsList: JobProps[];
}

const temp = [
  {
    title: 'Título',
    company: 'Empresa X',
    description:
      'Descrição, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
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
      'Descrição, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    via: 'via',
    link: 'www.google.com',
    published_at: new Date(2021, 4, 18),
    time_zone: '+3',
    gogole_job_id: '0',
  },
];

const JobsList: React.FC<JobsListProps> = ({ children, jobsList }) => (
  <Container>
    {temp.map((jobs) => (
      <>
        <Job
          title={jobs.title}
          company={jobs.company}
          description={jobs.description}
          via={jobs.via}
          link={jobs.link}
          published_at={jobs.published_at}
          time_zone={jobs.time_zone}
          gogole_job_id={jobs.gogole_job_id}
        />
        <hr />
      </>
    ))}
  </Container>
);

export default JobsList;
