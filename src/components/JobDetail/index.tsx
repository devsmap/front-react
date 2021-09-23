import React from 'react';
import { Container, Title, Description } from './styles';

export interface JobDetailProps {
  title: string;
  company: string;
  description: string;
  via: string;
  link: string;
  published_at: Date;
  time_zone: string;
  gogole_job_id?: string;
}

// TODO: Acrescentar mais detalhes sobre a vaga
const JobDetail: React.FC<JobDetailProps> = ({
  // children,
  // company,
  // via,
  // link,
  // published_at,
  // time_zone,
  // gogole_job_id,
  title,
  description,
}) => (
  <Container>
    <Title>{title}</Title>
    <Description>
      {description
        .replaceAll('•', '\n•')
        .split('\n')
        .map((str) => (
          <p>{str}</p>
        ))}
    </Description>
  </Container>
);

export default JobDetail;
