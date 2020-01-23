import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import {
  CssBaseline,
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core'

import { store } from '../store'
import routes from './routes';
import { PrivateRoute, Navbar } from './elements'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e0e0e0',
      light: '#ffffff',
      dark: '#6a6a6a'
    },
    secondary: {
      main: '#ff5722',
      light: '#ff8a50',
      dark: '#c41c00'
    }
  }
})


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
          <Router>
            <ThemeProvider theme={theme}>
              <Navbar/>
              <i>Öffne das Developer-Menü (Chrome und Firefox: Shift-Strg-i), um Console-Logs zu sehen!</i>
              <Switch>
                { this.renderRoutes() }
              </Switch>
            </ThemeProvider>
          </Router>  
        </Provider>
      </>
    );
  }
}

export default App
