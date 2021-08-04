import React from 'react'
import {Route, Redirect} from 'react-router-dom'



/*
  Redirect -> Te redirige a otra url
*/

export default function PrivateRoute({component: Component, ...rest}) {

const user = false;


  return (
    <Route {...rest}>
      {
        user ? <Component />
        : <Redirect to="/login" />
      }
    </Route>
  )
}
