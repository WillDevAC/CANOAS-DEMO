import React from 'react';

import Aside from '../../components/dashboard/aside/index';

import Header from '../../components/dashboard/header/index';

import { Container, Wrapper } from './styles'

import Dashboard_content from '../../components/dashboard/dashboard-content/index';



const dashboard: React.FC = () => {
  return (
    <Wrapper>
      <Aside/>
      <Container>
        <Header/>
        <Dashboard_content/>
      </Container>
    </Wrapper>
  );
}

export default dashboard;