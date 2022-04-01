import React from 'react';

import { 
  SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper, 
  SidebarMenu, 
  SidebarLink, 
  SideBtnWrap, 
  SidebarRoute,
  Logo,
  Calendar
} from './styles';

const sidebar = ( { isOpen, toggle } ) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle} >
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <Logo>
            <img src="images/logo.webp" alt="" />
          </Logo>
          <SidebarLink>Página principal</SidebarLink>
          <SidebarLink>Para o seu filho</SidebarLink>
          <SidebarLink>Sobre nós</SidebarLink>
          <SidebarLink>Turmas</SidebarLink>
          <SidebarLink>Contatos</SidebarLink>
          <SidebarLink>Área dos pais</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute><Calendar/>Agendar visita</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>      
  );
}

export default sidebar;