import React, { HTMLProps, ReactNode } from 'react';
import { X as CloseIcon } from 'react-feather';
import {
  Container,
  TopBar,
  Icons,
  Title,
  Content,
  SubContent,
  Tab,
  SubTab,
  SubIcons,
} from './styles';

type SideBarProps = HTMLProps<HTMLDivElement> & {
  isOpen: boolean;
  isSubOpen: boolean;
  title?: string;
  subChildren?: React.ReactNode;
  close(): Promise<void>;
  closeSub(): Promise<void>;
};

const Sidebar: React.FC<SideBarProps> = ({
  children,
  subChildren,
  isOpen,
  isSubOpen,
  title = 'Vagas Disponíveis',
  close,
  closeSub,
}) => (
  <Container isOpen={isOpen} isSubOpen={isSubOpen}>
    <Tab>
      <TopBar>
        <Title>{title}</Title>
        {!isSubOpen && (
          <Icons onClick={() => close()}>
            <CloseIcon />
          </Icons>
        )}
      </TopBar>
      <Content isOpen isSubOpen={isSubOpen}>
        {children}
      </Content>
    </Tab>
    <SubTab>
      <SubIcons onClick={() => closeSub()}>
        <CloseIcon />
      </SubIcons>
      {isSubOpen && <SubContent>{subChildren}</SubContent>}
    </SubTab>
  </Container>
);

export default Sidebar;
