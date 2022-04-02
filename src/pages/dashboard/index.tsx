import React from 'react';

import Aside from '../../components/dashboard/aside/index';

import Header from '../../components/dashboard/header/index';

import { Container, Wrapper } from '../../templates/dashboard/styles'

import Dash_content from '../../components/dashboard/dash-content/index';



const dashboard: React.FC = () => {
  return (
    <Wrapper>
      <Aside/>
      <Container>
        <Header/>
        <Dash_content/>
      </Container>
    </Wrapper>
  );
}

export default dashboard;