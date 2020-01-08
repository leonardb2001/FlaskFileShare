import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../store'
import AuthenticationExample from './examples/AuthenticationExample'
import UserSearchExample from './examples/UserSearchExample'
import RegisterExample from './examples/RegisterExample'
import DeleteUserExample from './examples/DeleteUserExample'
import GetFilesExample from './examples/GetFilesExample'
import PostFileExample from './examples/PostFileExample'
import DeleteFileExample from './examples/DeleteFileExample'

class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <i>Öffne das Developer-Menü (Chrome und Firefox: Shift-Strg-i), um Console-Logs zu sehen!</i>
          <AuthenticationExample />
          <UserSearchExample />
          <RegisterExample />
          <DeleteUserExample />
          <GetFilesExample />
          <PostFileExample />
          <DeleteFileExample />
        </Provider>
      </>
    );
  }
}

export default App
