import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import routes from '@/router';
import store from '@/store';

import JRHeader from '@/components/web-header'
import JRFooter from '@/components/web-footer'

import JRAppPlayerBar from './pages/player/app-player-bar';

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <JRHeader />
        {renderRoutes(routes)}
        <JRFooter />
        <JRAppPlayerBar />
      </HashRouter>
    </Provider>
  )
})
