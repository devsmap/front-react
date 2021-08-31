import React from 'react';

import { AuthProvider } from './auth';
import { TechsProvider } from './techs';
import { BotJobsProvider } from './botJobs';
import { SideBarProvider } from './sideBar';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <TechsProvider>
      <BotJobsProvider>
        <SideBarProvider>{children}</SideBarProvider>
      </BotJobsProvider>
    </TechsProvider>
  </AuthProvider>
);

export default AppProvider;
