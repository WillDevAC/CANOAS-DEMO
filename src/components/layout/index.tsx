import React from 'react';

import { Container } from './styles';

import Header from '../../components/header';

const layout: React.FC = ( { children } ) => {
  return (
    <>  
        <Header/>
        
        <Container>
            { children }
        </Container>

    </>
  );
}

export default layout;