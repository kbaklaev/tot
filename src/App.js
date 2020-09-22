import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'

import Public from './routes/public'

const setTestUserToLocalStorage = () => {
  localStorage.setItem('testUser', btoa('testuser@planktonics.ru'))
  localStorage.setItem('testPwd', btoa('qwerty'))
}

function App() {

  useEffect(() => {
    setTestUserToLocalStorage()
  }, [])

  return (
    <>
      <Public />
    </>
  );
}

export default App;
