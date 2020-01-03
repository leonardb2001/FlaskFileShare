
import React from 'react'
import { connect } from 'react-redux'
import { getStatus, getResources } from 'redux-resource';

import { postUser } from '../../globals/actionCreators'

const REQUEST_KEY = 'registerUser'

class RegisterExample extends React.Component {
  render() {
    const { users, status, statusCode, dispatch } = this.props
    console.log('register status: ', status)
    console.log('register resources: ', users, statusCode)
    return (
      <>
        <button style={{ display: 'block' }} onClick={ () => {
          dispatch(postUser(
            REQUEST_KEY,
            'userSearch',
            'albert_einstein',
            'albert@einstein.com',
            'e=mc^2#forever'
          ))
        }}>Register</button>
      </>
    )
  }
}

function mapStateToProps(state) {
  const users = getResources(state.users, 'search')
  const status = getStatus(
    state.users,
    `requests.${REQUEST_KEY}.status`
  )
  const statusCode = (state.users.requests[REQUEST_KEY]
    || {statusCode: undefined}).statusCode
  return {
    users,
    status,
    statusCode
  }
}

export default connect(mapStateToProps)(RegisterExample)
