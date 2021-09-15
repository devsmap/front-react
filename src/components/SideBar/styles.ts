import styled from 'styled-components';

interface ContainerProps {
  readonly isOpen: boolean;
  readonly isSubOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;

  flex-direction: row;
  flex-wrap: nowrap;

  height: calc(100% - 120px);
  width: ${(props) => {
    if (props.isOpen) {
      return props.isSubOpen ? '900px' : '350px';
    }
    return '0';
  }};
  position: fixed;
  z-index: 100;
  top: 120px;
  left: 0;
  background-color: #312e38;
  overflow: hidden;
  /* overflow-y: auto; */
  transition: 0.5s;
`;

export const Tab = styled.div`
  width: 350px;
`;

export const Content = styled.div<ContainerProps>`
  width: 350px;
  height: calc(100%);
  overflow-y: ${(props) => (props.isSubOpen ? 'hidden' : 'auto')};

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar:hover {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
    width: 10px;
  }
`;

export const SubTab = styled.div`
  width: 550px;
`;

export const SubContent = styled.div`
  width: 550px;
  height: calc(100%);
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar:hover {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
    width: 10px;
  }
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

export const SubIcons = styled.a`
  display: flex;

  justify-content: flex-end;
  align-items: center;

  padding: 0 12px;
  height: 57px;
  cursor: pointer;
  color: white;
  background-color: #242229;

  &:hover {
    color: #9d94b2;
  }
`;
