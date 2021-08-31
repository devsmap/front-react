import React, { HTMLProps } from 'react';
import { Container } from './styles';

type SideBarProps = HTMLProps<HTMLDivElement> & {
  isOpen: boolean;
};

const Sidebar: React.FC<SideBarProps> = ({ children, isOpen }) => (
  <Container isOpen={isOpen}>{children}</Container>
);

export default Sidebar;
