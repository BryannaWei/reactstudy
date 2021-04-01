import React, { createContext } from 'react';

import CounterClass from "./01_体验hooks/01_counter-class";
import CounterHook from './01_体验hooks/02_counter-hook';
import MoreState from './02_userSate使用/01_多个状态的使用';
import ComplexState from './02_userSate使用/02_复杂状态修改';
import CounterHook1 from './02_userSate使用/03_counter-hook';
import ClassTitle from './03_useEffect使用/01_class改title';
import EffectTitle from './03_useEffect使用/02_useEffect的hook改title';
import EffectHookCancel from './03_useEffect使用/03_useEffect模拟订阅事件和取消订阅';
import MoreEffectUse from './03_useEffect使用/04_多个useEffect的使用';
import ContextUseDemo from './04_useContext使用/useContext使用';
import Home from './05_useReducer使用/Home';
import Profile from './05_useReducer使用/Profile';

export const UserContext = createContext()
export const ThemeContext = createContext()

export default function App() {
  return (
    <div>
      {/* <CounterClass /> */}
      {/* <CounterHook /> */}

      {/* <MoreState /> */}
      {/* <ComplexState /> */}
      {/* <CounterHook1 /> */}

      {/* <ClassTitle /> */}
      {/* <EffectTitle /> */}
      {/* <EffectHookCancel /> */}
      {/* <MoreEffectUse /> */}

      {/* <UserContext.Provider value={{name:'bryanna',age:18}}>
        <ThemeContext.Provider value={{fontSize:18,color:'red'}}>
          <ContextUseDemo />
        </ThemeContext.Provider>
      </UserContext.Provider> */}

      <Home/>
      <Profile />
    </div>
  )
}