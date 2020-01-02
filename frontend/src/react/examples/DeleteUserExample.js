
import React from 'react'
import { connect } from 'react-redux'
import { actionTypes, getStatus, getResources } from 'redux-resource';

import { deleteUser } from '../../actions/services/users'

const REQUEST_KEY = 'removeUser'

class DeleteUserExample extends React.Component {
  render() {
    const { users, status, statusCode, dispatch } = this.props
    console.log('delete user status: ', status)
    console.log('delete user resources: ', users, statusCode)
    return (
      <>
        <button style={{ display: 'block' }} onClick={ () => {
          dispatch({
            type: actionTypes.DELETE_RESOURCES_PENDING,
            resourceType: 'users',
            requestKey: REQUEST_KEY,
            getter: deleteUser,
            list: 'search',
            resource: '9e32f25dab6c4d7f8bd54a4bfba9ccd9',
            args: {
              password: 'password123'
            }
          })
        }}>DeleteUser</button>
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

export default connect(mapStateToProps)(DeleteUserExample)
