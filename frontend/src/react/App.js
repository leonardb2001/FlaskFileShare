import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../store'
import AuthenticationExample from './examples/AuthenticationExample'
import UserSearchExample from './examples/UserSearchExample'
import RegisterExample from './examples/RegisterExample'
import DeleteUserExample from './examples/DeleteUserExample'
import GetFilesExample from './examples/GetFilesExample'

class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <AuthenticationExample />
          <UserSearchExample />
          <RegisterExample />
          <DeleteUserExample />
          <GetFilesExample />
        </Provider>
      </>
    );
  }
}

export default App
