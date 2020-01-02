
import React from 'react'
import { connect } from 'react-redux'
import { actionTypes, getStatus, getResources } from 'redux-resource';

import { postUser } from '../../actions/services/users'

const registerUser = 'registerUser'

class RegisterExample extends React.Component {

  render() {
    const { users, status, statusCode, dispatch } = this.props
    console.log('register status: ', status)
    console.log('register resources: ', users, statusCode)
    return (
      <>
        <button style={{ display: 'block' }} onClick={ () => {
          dispatch({
            type: actionTypes.CREATE_RESOURCES_PENDING,
            resourceType: 'users',
            requestKey: registerUser,
            getter: postUser,
            list: 'search',
            resource: {
              username: 'albert_einstein',
              email: 'albert@einstein.com'
            },
            args: {
              password: 'e=mc^2forever'
            }
          })
        }}>Register</button>
      </>
    )
  }

}

function mapStateToProps(state) {
  const users = getResources(state.users, 'search')
  const status = getStatus(
    state.users,
    `requests.${registerUser}.status`
  )
  const statusCode = (state.users.requests[registerUser]
    || {statusCode: undefined}).statusCode
  return {
    users,
    status,
    statusCode
  }
}

export default connect(mapStateToProps)(RegisterExample)
