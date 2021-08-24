import styled from 'styled-components';
import { Button } from 'reactstrap';

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  height: '100vh';
`;

export const Header = styled.header`
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 16px 16px;
  background: #242229;

  img {
    width: 180px;
  }
`;

export const Content = styled.main`
  position: absolute;

  width: 100%;
  height: calc(100% - 118px);
  margin-top: 118px;
`;

export const OptionsMenu = styled.div`
  display: flex;

  flex-direction: row;
`;

export const CustomButton = styled(Button)`
  color: #fff;
  background: #7367f0;
  padding: 7px 14px;
  &:hover {
    background-color: #5e57c0;
  }
`;

export const CarouselItens = styled.div`
  height: 50px;
`;
