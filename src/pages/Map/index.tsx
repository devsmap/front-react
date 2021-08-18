import React from 'react';
import {
  Content,
  Header,
  OptionsMenu,
  CustomButton,
  CarouselItens,
} from './styles';

import logoImg from '../../assets/logo/logotype/original-white.svg';

const Map: React.FC = () => (
  <>
    <Header>
      <img src={logoImg} alt="devsmap" />

      <OptionsMenu>
        <CustomButton size="small" variant="contained">
          <span>Cadastrar Vaga</span>
        </CustomButton>
      </OptionsMenu>
    </Header>
    <CarouselItens>
      <span>Techs</span>
    </CarouselItens>
    <Content>
      <span>Mapa</span>
    </Content>
  </>
);

export default Map;
