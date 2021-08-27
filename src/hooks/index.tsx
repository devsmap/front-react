import React from 'react';

import { AuthProvider } from './auth';
import { TechsProvider } from './techs';
import { BotJobsProvider } from './botJobs';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <TechsProvider>
      <BotJobsProvider>{children}</BotJobsProvider>
    </TechsProvider>
  </AuthProvider>
);

export default AppProvider;
