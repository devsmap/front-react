import React, { useCallback, useState } from 'react';
import { Container } from './styles';
import Job, { JobProps } from './components/Job';

interface JobsListProps {
  jobsList: JobProps[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  openJob(job: any): Promise<void>;
}

const JobsList: React.FC<JobsListProps> = ({ jobsList, openJob }) => {
  const [openedJob, setOpenedJob] = useState<string>('');

  const handleOpenJob = useCallback(
    async (job) => {
      setOpenedJob(job.id);

      openJob(job);
    },
    [openJob],
  );

  return (
    <Container>
      {jobsList.map((jobs) => (
        <>
          <Job
            id={jobs.id}
            key={jobs.id}
            isOpened={openedJob === jobs.id}
            title={jobs.title}
            company={jobs.company}
            description={jobs.description}
            via={jobs.via}
            link={jobs.link}
            published_at={jobs.published_at}
            time_zone={jobs.time_zone}
            gogole_job_id={jobs.gogole_job_id}
            openJob={handleOpenJob}
          />
        </>
      ))}
    </Container>
  );
};

export default JobsList;
