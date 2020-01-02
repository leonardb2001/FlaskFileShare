import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../store'
import AuthenticationExample from './AuthenticationExample'
import UserSearchExample from './UserSearchExample'

class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <AuthenticationExample />
          <UserSearchExample />
        </Provider>
      </>
    );
  }
}

export default App
