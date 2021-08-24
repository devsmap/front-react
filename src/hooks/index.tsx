import React from 'react';

import { AuthProvider } from './auth';
import { TechsProvider } from './techs';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <TechsProvider>{children}</TechsProvider>
  </AuthProvider>
);

export default AppProvider;
