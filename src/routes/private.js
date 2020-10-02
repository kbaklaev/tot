import React, { useState } from "react";
import { Switch, Route, Redirect, useHistory, Link } from "react-router-dom";

import Work from "../pages/private/work";
import Flood from "../pages/private/flood";

const Private = () => {
  const history = useHistory();
  const [title, setTitle] = useState("Рабочий чат");

  const logoutHandleClick = () => {
    sessionStorage.removeItem("Auth");
    history.push("/");
    history.go();
  };

  return (
    <div className="h-screen flex">
      <div className="w-64 bg-blue-200 p-4 rounded-l-lg h-full flex flex-col">
        <span className="font-bold pt-4 pb-8 text-center font-mono text-lg text-gray-800">
          Planktonics
        </span>
        <Link
          to="/work"
          className="bg-white hover:bg-gray-100 text-center text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => setTitle("Рабочий чат")}
        >
          Рабочий чат
        </Link>
        <Link
          to="/flood"
          className="bg-white hover:bg-gray-100 text-center text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => setTitle("Флудилка")}
        >
          Флудилка
        </Link>
        <button
          type="button"
          className="pt-8"
          onClick={logoutHandleClick}
        >
          Выйти
        </button>
      </div>
      <div className="w-full flex flex-col h-screen justify-between overflow-hidden text-center">
        <h1 className="flex w-full h-24 text-xl text-gray-800 font-bold bg-blue-200 p-4 rounded-tr-lg justify-center">
          {title}
        </h1>
        <Switch>
          <Route exact path="/work" component={Work} />
          <Route exact path="/flood" component={Flood} />
          <Route exact path="*">
            <Redirect to="/work" />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Private;
