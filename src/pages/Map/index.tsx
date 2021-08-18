import React from 'react';
import { Content, Header } from './styles';

import logoImg from '../../assets/logo/logotype/original-white.svg';

const Map: React.FC = () => (
  <>
    <Header>
      <img src={logoImg} alt="devsmap" />
    </Header>
    <Content>
      <span>Mapa</span>
    </Content>
  </>
);

export default Map;
