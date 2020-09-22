import React from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import Work from '../pages/private/work';
import Flood from '../pages/private/flood';

const Public = () => {
  return (
    <div>
      <section>
        сайдбар
      </section>
      <section>
        <Switch>
          <Route exact path="/work" component={Work} />
          <Route exact path="/flood" component={Flood} />
          <Route exact path="*">
            <Redirect to="/work" />
          </Route>
        </Switch>
      </section>
    </div>
  );
};

export default Public;
