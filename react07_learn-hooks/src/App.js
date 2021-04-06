import React, { createContext, useState } from 'react';

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
import CallbackHookDemo01 from './06_useCallback使用/01_不能进行的性能优化';
import CallbackHookDemo02 from './06_useCallback使用/02_能进行的性能优化';
import MemoHookDemo01 from './07_useMemo使用/01_useMemo复杂计算的应用';
import MemoHookDemo02 from './07_useMemo使用/02_useMemo传入子组件应用类型';
import RefHookDemo01 from './08_useRef使用/01_引入DOM';
import RefHookDemo02 from './08_useRef使用/02_保存数据';
import ForwardRefDemo from './09_useImperativeHandle使用/01_回顾forwardRef';
import UseImperaticeHandleHookDemo from './09_useImperativeHandle使用/02_useImperativeHandle';
import EffectCountDemo from './10_useLayoutEffect使用/useEffect的count修改';
import LayoutEffectCountDemo from './10_useLayoutEffect使用/useLayoutEffect的count修改';
import CustomLifeHookDemo01 from './11_自定义Hook/01_认识自定义Hook';
import CustomContextShareHook from './11_自定义Hook/02_自定义Hook练习-Context共享';
import CustomScrollPositionHook from './11_自定义Hook/03_自定义Hook练习-获取滚动位置';
import CustomLocalStoreHook from './11_自定义Hook/04_自定义Hook练习-本地存储';

export const UserContext = createContext()
export const ThemeContext = createContext()
export const TokenContext = createContext()

export default function App() {
  const [show, setShow] = useState(true)
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

      {/* <Home/>
      <Profile /> */}

      {/* <CallbackHookDemo01 /> */}
      {/* <CallbackHookDemo02 /> */}

      {/* <MemoHookDemo01 /> */}
      {/* <MemoHookDemo02 /> */}

      {/* <RefHookDemo01 /> */}
      {/* <RefHookDemo02 /> */}

      {/* <ForwardRefDemo /> */}
      {/* <UseImperaticeHandleHookDemo /> */}

      {/* <EffectCountDemo /> */}
      {/* <LayoutEffectCountDemo /> */}

      {/* {show && <CustomLifeHookDemo01 />} */}
      {/* <UserContext.Provider value={{name:'bryanna',age:18}}>
        <TokenContext.Provider value="241b1v4l1k24124v1246b563bj34">
          <CustomContextShareHook />
        </TokenContext.Provider>
      </UserContext.Provider> */}
      {/* <CustomScrollPositionHook /> */}
      <CustomLocalStoreHook />

      <button onClick={e => setShow(!show)}>切换</button>
    </div>
  )
}