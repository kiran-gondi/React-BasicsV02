import './App.css';
import UseCallbackParent from './Hooks/useCallbackParent';
import UseMemo from './Hooks/useMemo';
import UseRef from './Hooks/useRef';
import UseLayoutEffectHook from './Hooks/useLayoutEffect';
import React from 'react';
import UseCustomHook from "./Hooks/useCustomHookUse";
import ConstructorExample from './LifeCycle/constructorExample';
import StateComponent from './LifeCycle/stateExample';
import CompnenetDidMount from "./LifeCycle/componentDidMountExample";
import ControlledComponent from "./ControlledUnControlled/controlled";
import UnControlledComponent from "./ControlledUnControlled/uncontrolled";


function App() {
  //UseCallbackParent
  //return <UseCallbackParent></UseCallbackParent>;

  //UseMemo
  // return (<UseMemo data={"test123"}></UseMemo>);

  //UseRef
  //return (<UseRef></UseRef>);

  //UseLayoutEffect
  //return (<UseLayoutEffectHook></UseLayoutEffectHook>);

  //UseCustomHook
  //return (<UseCustomHook></UseCustomHook>);

  //Lifecycle - ConstructorExample
  //return (<ConstructorExample></ConstructorExample>);

  //StateComponent in Class
  //return(<StateComponent></StateComponent>);

  //Lifecycle - ComponenetDidMount
  //return(<CompnenetDidMount></CompnenetDidMount>);

  //Controlled-Component
  //return(<ControlledComponent></ControlledComponent>);

  //UnControlled-Component
  return(<UnControlledComponent></UnControlledComponent>);
  
}

export default App;
