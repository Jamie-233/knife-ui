// import logo from './logo.svg';
import React, { useState } from 'react';
import Button from './Button';
import useColorSwitch from './useColorSwitch';

import './App.css';

function App() {
  // const [color, setColor] = useState('#ff0000')
  // 定义 Hooks 是为了代码复用
  const [color, handleButton1Click] = useColorSwitch();
  const [color2, handleButton2Click] = useColorSwitch('#0000ff', '#ff00ff');

  // const handleButton2Click = () => {
  //   console.log('btn2');
  // }

  return (
   <div>
      <Button width="120px" onClick={handleButton1Click} label="按钮" >
        <span>&gt;</span>
      </Button>
      <p style={{ color }}>文本</p>
    <Button onClick={handleButton2Click} label="点我" />
    <p style={{ color: color2 }}>文本</p>
   </div>
  );
}

export default App;
