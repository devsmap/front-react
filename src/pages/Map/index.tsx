import React from 'react';
import MapContainer from '../../components/MapContainer';
import {
  Content,
  Header,
  OptionsMenu,
  CustomButton,
  CarouselItens,
  Container,
} from './styles';

import logoImg from '../../assets/logo/logotype/original-white.svg';

const Map: React.FC = () => (
  <Container>
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
      <MapContainer />
    </Content>
  </Container>
);

export default Map;
