import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import routes from '@/router';

import JRHeader from '@/components/web-header'
import JRFooter from '@/components/web-footer'

export default memo(function App() {
  return (
    <HashRouter>
      <JRHeader />
      {renderRoutes(routes)}
      <JRFooter />
    </HashRouter>
  )
})
