import styled from 'styled-components';
import { darken } from 'polished';

interface ContainerProps {
  readonly isOpened: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;

  flex-direction: column;

  padding: 18px 18px;
  background-color: ${(props) => {
    const color = '#312e38';

    return props.isOpened ? darken(0.06, color) : color;
  }};
`;

export const GeneralInfo = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.div`
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
`;

export const Company = styled.div`
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
`;

export const Info = styled.div`
  width: 215px;
`;

export const Link = styled.a`
  color: white;

  &:hover {
    color: #9d94b2;
  }
`;

export const Picture = styled.div`
  width: 100px;
  border-radius: 10px;
  padding: 0 0 0 18px;

  & img {
    width: 100%;
    border-radius: 10px;
  }
`;

export const Description = styled.div`
  margin-top: 14px;
  text-align: justify;
`;
