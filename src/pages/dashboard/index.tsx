import React from 'react';


import LayoutDashboard from '../../components/dashboard/layout'

import Card from '../../components/dashboard/card'

const dashboard: React.FC = () => {
  return (
    <LayoutDashboard>
      <Card Title="Title1" Date="15/12/2003" Link="https://www.google.com"/>
      <Card Title="Title1" Date="15/12/2003" Link="https://www.google.com"/>
      <Card Title="Title1" Date="15/12/2003" Link="https://www.google.com"/>
    </LayoutDashboard>
  );
}

export default dashboard;