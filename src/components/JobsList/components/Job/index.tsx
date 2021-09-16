import React from 'react';
import {
  Container,
  GeneralInfo,
  Picture,
  Info,
  Title,
  Description,
  Link,
  Company,
} from './styles';
import DefaultCompanyImg from '../../../../assets/company.jpg';

export interface JobProps {
  id: string;
  title: string;
  isOpened: boolean;
  company: string;
  description: string;
  via: string;
  link: string;
  published_at: Date;
  time_zone: string;
  gogole_job_id?: string;
  openJob(job: any): Promise<void>;
}

const Job: React.FC<JobProps> = ({
  id,
  title,
  isOpened,
  company,
  description,
  via,
  link,
  published_at,
  time_zone,
  gogole_job_id,
  openJob,
}) => (
  <>
    <Container isOpened={isOpened}>
      <GeneralInfo>
        <Info>
          <Title
            onClick={() => {
              openJob({
                id,
                title,
                company,
                description,
                via,
                link,
                published_at,
                time_zone,
                gogole_job_id,
              });
            }}
          >
            {title}
          </Title>
          <Company
            onClick={() => {
              openJob({
                id,
                title,
                company,
                description,
                via,
                link,
                published_at,
                time_zone,
                gogole_job_id,
              });
            }}
          >
            {company}
          </Company>
          <Link href={link}>Ir para vaga</Link>
        </Info>
        <Picture>
          <img src={DefaultCompanyImg} alt="pic" />
        </Picture>
      </GeneralInfo>
      {/* <Description>{description}</Description> */}
    </Container>
    {/* <hr /> */}
  </>
);

export default Job;
