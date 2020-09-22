import React from 'react'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'

import Signin from '../pages/auth/signin'
import Signup from '../pages/auth/signup'

const Public = () => {

  return (
    <Switch>
      <Route exact path='/signin' component={Signin} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='*'>
        <Redirect to="/signin" />
      </Route>
    </Switch>
  )
}

export default Public
