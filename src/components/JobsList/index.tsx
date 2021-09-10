import React from 'react';
import { Container } from './styles';
import Job, { JobProps } from './components/Job';

interface JobsListProps {
  jobsList: JobProps[];
}

const JobsList: React.FC<JobsListProps> = ({ children, jobsList }) => (
  <Container>
    {jobsList.map((jobs) => (
      <>
        <Job
          key={jobs.gogole_job_id}
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
