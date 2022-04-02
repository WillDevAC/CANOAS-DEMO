import React from 'react';

import Dash_content from '../../components/dashboard/dash-content/index';

import LayoutDashboard from '../../components/dashboard/layout'

const dashboard: React.FC = () => {
  return (
    <LayoutDashboard>
      <Dash_content />
    </LayoutDashboard>
  );
}

export default dashboard;