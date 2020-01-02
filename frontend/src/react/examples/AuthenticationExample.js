
import React from 'react';
import { connect } from 'react-redux'

import { getAuthToken, logout } from '../../globals/actionCreators'

class AuthenticationExample extends React.Component {
  render() {
    const { auth, dispatch } = this.props
    console.log('auth state: ', auth)
    return (
      <>
        <button onClick={ () => {
          dispatch(getAuthToken('tommy', 'password123'))
        }}> AuthenticateButten </button>
        <button onClick={ () => {
          dispatch(logout())
        }}> Logout </button>
            
      </>
    )
  }
}


function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(AuthenticationExample)
