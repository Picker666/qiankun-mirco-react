import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import NotFound from './pages/NotFound';

const Routers = () => {

  return <Routes>
    <Route path="" element=<Home/>/>
    <Route path="home" element=<Home/>/>
    <Route path="firstPage" element=<FirstPage/>/>
    <Route path="secondPage" element=<SecondPage/>/>
    <Route path="*" element=<NotFound/>/>
  </Routes>
}

export default Routers;
