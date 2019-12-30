
import React from 'react';
import { connect } from 'react-redux'

import { getAuthToken } from '../globals/actionCreators'

class Test extends React.Component {
  render() {
    const { auth, dispatch } = this.props
    console.log(auth)
    return (
      <>
        <button onClick={ () => {
          dispatch(getAuthToken('tommy', 'password123'))
        }}> AuthenticateButten </button>
            
      </>
    )
  }
}


function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Test);
