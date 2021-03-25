import React from 'react';
import ReactDOM from 'react-dom';

import store from './stores';

// import { StoreContext } from './untils/context'
import { Provider } from 'react-redux'

import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(
//   <StoreContext.Provider value={store}>
//     <App />
//   </StoreContext.Provider>,
// document.getElementById('root'));

ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>,
document.getElementById('root'));


//查看当前地址 git remote -v
//设置为ssh地址 git remote set-url origin git@github:USERNAME/OTHERREPOSITROY.git