import styled from 'styled-components';

interface ContainerProps {
  readonly isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: calc(100% - 120px);
  width: ${(props) => (props.isOpen ? '350px' : '0')};
  position: fixed;
  z-index: 100;
  top: 120px;
  left: 0;
  background-color: #312e38;
  overflow: hidden;
  transition: 0.5s;
`;

export const TopBar = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 350px;
  background-color: #242229;
  overflow: hidden;
`;

export const Title = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  padding: 18px;
`;

export const Icons = styled.a`
  display: flex;

  justify-content: center;
  align-items: center;

  padding: 12px;
  cursor: pointer;
  color: white;

  &:hover {
    color: #9d94b2;
  }
`;

export const Content = styled.div`
  width: 350px;

  overflow-y: auto;
`;
