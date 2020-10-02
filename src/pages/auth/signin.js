import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

import AuthButton from '../../components/auth-button';

const Signin = () => {
  const history = useHistory();
  
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      if (
        (atob(localStorage.getItem('testUser')) === values.username &&
          atob(localStorage.getItem('testPwd')) === values.password) ||
        (atob(localStorage.getItem('User')) === values.username &&
          atob(localStorage.getItem('Password')) === values.password)
      ) {
        sessionStorage.setItem('Auth', true)
        history.push('/');
        history.go()
      } else {
        setError('неверное имя пользователя или пароль');
      }
    },
  });

  return (
    <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-3 w-screen h-screen">
      <div className="w-full h-full col-start-1 lg:col-start-2 row-start-1 lg:row-start-2">
        <header className="text-blue-500 text-sm font-bold p-4 text-right">
          <Link to="/signup" className="px-4 uppercase">
            создать профиль
          </Link>
        </header>
        <h1 className="text-xl font-bold px-8">Вход пользователя</h1>
        <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 h-1/9" onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <input
              id="username"
              type="email"
              name="username"
              placeholder="введите ваш email адрес"
              autoComplete="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              className="appearance-none bg-transparent border-b-2 border-blue-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none lowercase"
            />
          </div>
          <div className="mb-2">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="введите ваш пароль"
              autoComplete="current-password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="appearance-none bg-transparent border-b-2 border-blue-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            />
          </div>
          {error && <div className="text-red-600 text-center">{error}</div>}
          <AuthButton title="войти" />
        </form>
      </div>
    </div>
  );
};

export default Signin;
