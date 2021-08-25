import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 8px 32px;

  img {
    filter: grayscale(100%) brightness(1.1);
    height: 34px;
    transition: filter 0.3s;
    padding: 0 5px;

    &:hover {
      filter: none;

      cursor: pointer;
    }
  }
`;
