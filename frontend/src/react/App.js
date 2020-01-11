import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import {
  CssBaseline
} from '@material-ui/core'

import { store } from '../store'
import routes from './routes';
import { PrivateRoute, Navbar } from './elements'

class App extends React.Component {

  renderRoutes = () => {
    return routes.map((route, index) =>
      route.private
      ? <PrivateRoute
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        /> 
      : <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
    );
  }


  render() {
    return (
      <>
        <CssBaseline/>
        <Provider store={store}>
          <Navbar/>
          <i>Öffne das Developer-Menü (Chrome und Firefox: Shift-Strg-i), um Console-Logs zu sehen!</i>
          <Router>
            <Switch>
              { this.renderRoutes() }
            </Switch>
          </Router>  
        </Provider>
      </>
    );
  }
}

export default App
