import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  padding: 6px 18px;
`;

export const GeneralInfo = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

export const Info = styled.div``;

export const Link = styled.a`
  color: white;

  &:hover {
    color: #9d94b2;
  }
`;

export const Picture = styled.div`
  width: 100px;
  border-radius: 10px;

  & img {
    width: 100px;
    border-radius: 10px;
  }
`;

export const Description = styled.div`
  margin-top: 14px;
  text-align: justify;
`;
