import styled from 'styled-components';

interface ContainerProps {
  markerWidth: number;
  backgroundColor: string;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => props.markerWidth}px;
  height: ${(props) => props.markerWidth}px;
  background-color: ${(props) => props.backgroundColor};

  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: white;
  font-size: small;
`;
