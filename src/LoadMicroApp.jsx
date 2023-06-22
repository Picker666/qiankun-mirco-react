import { loadMicroApp } from 'qiankun';
import { useState, useEffect, useRef } from 'react';

const LoadMicroApp = () => {
  const microRef = useRef();
  const [count, setCount] = useState(0);

  useEffect(() => {
    microRef.current = loadMicroApp({
      name: 'loadMicroApp',
      entry: './MicroApp',
      container: document.querySelector('#loadMicroApp'),
      activeRule: (location) => {
        console.log('location: ', location);
        return location.pathname.startWith('/loadMicroApp')
      }
    }, {
      sandbox: true
    })

    return () => {
      microRef.current.unmount();
    }
  }, []);

  useEffect(() => {
    microRef.current?.update?.({ count });
  }, [count])

  const handleClick = (event) => {
    setCount(count+1);
  }

  return <div>
    <h1 onClick={handleClick}>手动加载一个微应用</h1>
    <div id="loadMicroApp"></div>
  </div>
}

export default LoadMicroApp;
