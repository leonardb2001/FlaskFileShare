import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../store'
import AuthenticationExample from './AuthenticationExample'
import UserExample from './UserExample'

class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <AuthenticationExample />
          <UserExample />
        </Provider>
      </>
    );
  }
}

export default App
