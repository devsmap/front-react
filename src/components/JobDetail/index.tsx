import React from 'react';
import { Container } from './styles';

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

const JobDetail: React.FC<JobDetailProps> = ({
  children,
  title,
  company,
  description,
  via,
  link,
  published_at,
  time_zone,
  gogole_job_id,
}) => <Container>Teste</Container>;

export default JobDetail;
