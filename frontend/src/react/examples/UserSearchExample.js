
import React from 'react'
import { connect } from 'react-redux'
import { getStatus, getResources } from 'redux-resource';

import { getUsers } from '../../globals/actionCreators'

const REQUEST_KEY = 'exampleUserSearch'

class UserSearchExample extends React.Component {
  render() {
    const { users, status, statusCode, dispatch } = this.props
    console.log('user search: ', users, status, statusCode)
    return (
      <>
        <button style={{ display: 'block' }} onClick={ () => {
          dispatch(getUsers(
            REQUEST_KEY,
            'userSearch',
            'tommy',
            'secret_auth_token'
          ))
        }}>GetUsers</button>
      </>
    )
  }
}

function mapStateToProps(state) {
  const users = getResources(state.users, 'userSearch')
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

export default connect(mapStateToProps)(UserSearchExample)
