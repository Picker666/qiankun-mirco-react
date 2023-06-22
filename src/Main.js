import { useMemo, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';

import './App.css';
import Routers  from './Route';

function App() {

  const location = useLocation();
  const defaultKey = useRef(location.pathname.split('/')[1] || 'home');

  const items = useMemo(() => [{
    label: <Link to="/home">Home</Link>,
    key: 'home',
  },{
    label: <Link to="/firstPage">firstPage</Link>,
    key: 'firstPage',
  },{
    label: <Link to="/secondPage">secondPage</Link>,
    key: 'secondPage',
  }], []);
  
  return (
    <div className="App">
      <Menu theme="dark" defaultSelectedKeys={[defaultKey.current]} mode="horizontal" items={items} />
      {/* <header className="App-header">
        <img src={'./logo192.png'} className="App-logo" alt="logo" />
      </header> */}
      <Routers />
    </div>
  );
}

export default App;
