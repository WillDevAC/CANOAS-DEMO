import React from 'react';

import LayoutDashboard from '../../components/dashboard/layout'

import Card from '../../components/dashboard/card'

const dashboard: React.FC = () => {
  return (
    <LayoutDashboard>
      <Card Title="Cardápio Berçário" Date="03/03/2022" Link="menus/cardapio.xlsx"/>
      <Card Title="Cardápio Março" Date="03/03/2022" Link="menus/cardapiobercario.xlsx"/>
    </LayoutDashboard>
  );
}

export default dashboard;