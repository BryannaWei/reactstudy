import React from 'react';

import CounterClass from "./01_体验hooks/01_counter-class";
import CounterHook from './01_体验hooks/02_counter-hook';
import MoreState from './02_userSate使用/01_多个状态的使用';
import ComplexState from './02_userSate使用/02_复杂状态修改';
import CounterHook1 from './02_userSate使用/03_counter-hook';

export default function App() {
  return (
    <div>
      {/* <CounterClass /> */}
      {/* <CounterHook /> */}
      {/* <MoreState /> */}
      {/* <ComplexState /> */}
      <CounterHook1 />
    </div>
  )
}