import React from 'react';

import { AuthProvider } from './auth';
import { TechsProvider } from './techs';
import { BotJobsProvider } from './botJobs';
import { SideBarProvider } from './sideBar';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <SideBarProvider>
      <BotJobsProvider>
        <TechsProvider>{children}</TechsProvider>
      </BotJobsProvider>
    </SideBarProvider>
  </AuthProvider>
);

export default AppProvider;
