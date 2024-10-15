import './App.css';
import UseCallbackParent from './Hooks/useCallbackParent';
import UseMemo from './Hooks/useMemo';
import UseRef from './Hooks/useRef';
import UseLayoutEffectHook from './Hooks/useLayoutEffect';
import React from 'react';

function App() {
  //UseCallbackParent
  //return <UseCallbackParent></UseCallbackParent>;

  //UseMemo
  // return (<UseMemo data={"test123"}></UseMemo>);

  //UseRef
  //return (<UseRef></UseRef>);

  //UseLayoutEffect
  return (<UseLayoutEffectHook></UseLayoutEffectHook>);

}

export default App;
