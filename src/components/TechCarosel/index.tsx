import React from 'react';
import { Container } from './styles';

import img1 from '../../assets/techs/csharp.png';
import img2 from '../../assets/techs/java.png';
import img3 from '../../assets/techs/php.png';
import img4 from '../../assets/techs/python.png';
import img5 from '../../assets/techs/react.png';
import img6 from '../../assets/techs/ruby.png';

const TechCarosel: React.FC = () => (
  <Container>
    <img src={img1} alt="" />
    <img src={img2} alt="" />
    <img src={img3} alt="" />
    <img src={img4} alt="" />
    <img src={img5} alt="" />
    <img src={img6} alt="" />
    <img src={img2} alt="" />
    <img src={img3} alt="" />
    <img src={img4} alt="" />
    <img src={img5} alt="" />
    <img src={img6} alt="" />
  </Container>
);

export default TechCarosel;
