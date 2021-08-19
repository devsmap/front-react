import styled from 'styled-components';
import { Button } from '@material-ui/core';

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
  height: calc(100% - 128px);
  margin-top: 128px;
`;

export const OptionsMenu = styled.div`
  display: flex;

  flex-direction: row;
`;

export const CustomButton = styled(Button)`
  background-color: #4831d4;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #5236ff;
  }
`;

export const CarouselItens = styled.div`
  height: 50px;
`;
