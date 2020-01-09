import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { store } from '../store'
import routes from './routes';
import { PrivateRoute } from './elements'
import AuthenticationExample from './examples/AuthenticationExample'
import UserSearchExample from './examples/UserSearchExample'
import RegisterExample from './examples/RegisterExample'
import DeleteUserExample from './examples/DeleteUserExample'
import GetFilesExample from './examples/GetFilesExample'
import PostFileExample from './examples/PostFileExample'
import DeleteFileExample from './examples/DeleteFileExample'

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
        <Provider store={store}>
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


// <i>Öffne das Developer-Menü (Chrome und Firefox: Shift-Strg-i), um Console-Logs zu sehen!</i>
