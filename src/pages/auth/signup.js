import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

import AuthButton from '../../components/auth-button'

const Signup = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      localStorage.setItem('User', btoa(values.username))
      localStorage.setItem('Password', btoa(values.password))
      history.push('/signin')
    },
  });

  return (
    <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-3 w-screen h-screen">
      <div className="w-full h-full col-start-1 lg:col-start-2 row-start-1 lg:row-start-2">
        <header className="text-blue-500 text-sm font-bold p-4 text-right">
          <Link to="/signin" className="px-4 uppercase">
            войти
          </Link>
        </header>
        <h1 className="text-xl font-bold px-8">Регистрация пользователя</h1>
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
          <AuthButton title="создать" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
