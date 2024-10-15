import { useState, useCallback } from 'react';
import UseCallbackChild from './useCallbackChild';

const UseParentCallback = () => {
  const [count, setCount] = useState(0);

  //Without useCallback
  // const handleIncrement = ()=>{
  //     setCount(count+1);
  // };

  // const handleDecrement = ()=>{
  //     setCount(count-1);
  // };

  //With useCallback
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleDecrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count} </p>
      <UseCallbackChild
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
      />
    </div>
  );
};

export default UseParentCallback;
