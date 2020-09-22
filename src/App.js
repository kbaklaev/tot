import React, { useEffect, useRef, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Public from './routes/public';
import Private from './routes/private';

const setTestUserToLocalStorage = () => {
  localStorage.setItem('testUser', btoa('testuser@planktonics.ru'));
  localStorage.setItem('testPwd', btoa('qwerty'));
};

function App() {
  const [userIsAuth, setUserIsAuth] = useState(sessionStorage.getItem('Auth') || null);
  const authUser = useRef(false);

  useEffect(() => {
    setTestUserToLocalStorage();
  }, []);

  useEffect(() => {
    userIsAuth && setUserIsAuth(true);
    if (sessionStorage.getItem('Auth')) authUser.current = true;
  }, [userIsAuth]);

  console.log(userIsAuth);

  return <>{authUser.current ? <Private /> : <Public />}</>;
}

export default App;
