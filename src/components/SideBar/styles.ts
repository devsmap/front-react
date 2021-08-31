import styled from 'styled-components';

interface ContainerProps {
  readonly isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: calc(100% - 120px);
  width: ${(props) => (props.isOpen ? '25%' : '0')};
  position: fixed;
  z-index: 100;
  top: 120px;
  left: 0;
  background-color: #242229;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
`;
