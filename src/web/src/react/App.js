import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../store'
import AuthenticationExample from './AuthenticationExample'

class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <AuthenticationExample />
        </Provider>
      </>
    );
  }
}

export default App
