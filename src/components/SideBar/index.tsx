import React, { HTMLProps } from 'react';
import { X as CloseIcon } from 'react-feather';
import { Container, TopBar, Icons, Title, Content } from './styles';

type SideBarProps = HTMLProps<HTMLDivElement> & {
  isOpen: boolean;
  title?: string;
  close(): Promise<void>;
};

const Sidebar: React.FC<SideBarProps> = ({
  children,
  isOpen,
  title = 'Vagas Disponíveis',
  close,
}) => (
  <Container isOpen={isOpen}>
    <TopBar>
      <Title>{title}</Title>
      <Icons onClick={() => close()}>
        <CloseIcon />
      </Icons>
    </TopBar>
    <Content>{children}</Content>
  </Container>
);

export default Sidebar;
