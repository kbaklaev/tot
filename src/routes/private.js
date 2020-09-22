import React, { useState } from 'react';
import { Switch, Route, Redirect, useHistory, Link } from 'react-router-dom';

import Work from '../pages/private/work';
import Flood from '../pages/private/flood';

const Private = () => {
  const [title, setTitle] = useState('Рабочий чат')

  return (
    <div className="h-screen flex p-4">
      <div className="w-64 bg-blue-200 p-4 rounded-l-lg h-full flex flex-col">
        <Link
          to="/work"
          className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
          onClick={() => setTitle('Рабочий чат')}
        >
          Рабочий чат
        </Link>
        <Link
          to="/flood"
          className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
          onClick={() => setTitle('Флудилка')}
        >
          Флудилка
        </Link>
      </div>
      <div className="flex flex-col w-full overflow-hidden text-center">
        <div className="flex w-full h-24 text-xl text-blue-500 font-bold bg-blue-200 p-4 rounded-tr-lg justify-center">
          {title}
        </div>
        <div className="w-full h-auto grid grid-rows-3 overflow-y-auto">
          <Switch>
            <Route exact path="/work" component={Work} />
            <Route exact path="/flood" component={Flood} />
            <Route exact path="*">
              <Redirect to="/work" />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Private;
