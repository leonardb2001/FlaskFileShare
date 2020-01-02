import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../store'
import AuthenticationExample from './examples/AuthenticationExample'
import UserSearchExample from './examples/UserSearchExample'
import RegisterExample from './examples/RegisterExample'

class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <AuthenticationExample />
          <UserSearchExample />
          <RegisterExample />
        </Provider>
      </>
    );
  }
}

export default App
