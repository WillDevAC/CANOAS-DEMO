import React, { useEffect } from 'react';

import LayoutDashboard from '../../components/dashboard/layout'

import Card from '../../components/dashboard/card'

import { useRouter } from 'next/router';

const dashboard: React.FC = () => {

  const router = useRouter();

  useEffect(() => {
    
    const password = prompt('Digite sua senha: ');

    if(password != '0225'){
      router.push('/')
    }

  });

  return (
    <LayoutDashboard>
      <Card Title="Cardápio Berçário" Date="03/03/2022" Link="menus/cardapio.xlsx"/>
      <Card Title="Cardápio Março" Date="03/03/2022" Link="menus/cardapiobercario.xlsx"/>
    </LayoutDashboard>
  );
}

export default dashboard;