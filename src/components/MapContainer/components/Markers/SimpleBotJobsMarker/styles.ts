import { darken, transparentize } from 'polished';
import styled from 'styled-components';

interface ContainerProps {
  markerWidth: number;
  backgroundColor: string;
  disable?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => props.markerWidth}px;
  height: ${(props) => props.markerWidth}px;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: none;
  transition: background-color 0.2s;
  transition: box-shadow 0.2s;
  transition: opacity 0.1s;
  opacity: ${(props) => (props.disable ? 0.2 : 1)};

  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: white;
  font-size: small;

  &:hover {
    background-color: ${(props) => darken(0.05, props.backgroundColor)};
    opacity: 1;
    box-shadow: 0 0 0 ${(props) => Math.max(3, props.markerWidth * 0.1)}px
      ${(props) => transparentize(0.4, props.backgroundColor)};
  }
`;
