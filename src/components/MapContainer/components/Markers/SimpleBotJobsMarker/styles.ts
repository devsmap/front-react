import styled from 'styled-components';

interface ContainerProps {
  markerWidth: number;
}

export const Container = styled.div<ContainerProps>`
  width: 50px;
  height: 50px;
  background-color: #826bf8;

  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: white;
  font-size: small;
`;
