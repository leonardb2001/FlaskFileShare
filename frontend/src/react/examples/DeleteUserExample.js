
import React from 'react'
import { connect } from 'react-redux'
import { getStatus, getResources } from 'redux-resource';

import { deleteUser } from '../../globals/actionCreators'

const REQUEST_KEY = 'deleteUser'

class DeleteUserExample extends React.Component {
  render() {
    const { users, status, statusCode, dispatch } = this.props
    console.log('delete user: ', users, status, statusCode)
    return (
      <>
        <button style={{ display: 'block' }} onClick={ () => {
          dispatch(deleteUser(
            REQUEST_KEY,
            '9e32f25dab6c4d7f8bd54a4bfba9ccd9',
            'tommy',
            'password123'
          ))
        }}>DeleteUser</button>
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

export default connect(mapStateToProps)(DeleteUserExample)
