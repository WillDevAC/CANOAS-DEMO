import React from 'react';

import { 
  SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper, 
  SidebarMenu, 
  SidebarLink, 
  SideBtnWrap, 
  SidebarRoute 
} from './styles';

const sidebar = ( { isOpen, toggle } ) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle} >
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink>Link1</SidebarLink>
          <SidebarLink>Link2</SidebarLink>
          <SidebarLink>Link3</SidebarLink>
          <SidebarLink>Link4</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute>Botão</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>      
  );
}

export default sidebar;