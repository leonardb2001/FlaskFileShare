import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../store'
import Test from './Test'

class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Test />
        </Provider>
      </>
    );
  }
}

export default App
