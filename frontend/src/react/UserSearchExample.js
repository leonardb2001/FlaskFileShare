
import React from 'react'
import { connect } from 'react-redux'
import { actionTypes, getStatus, getResources } from 'redux-resource';

import { getUsersSearch } from '../actions/services/users'

const getRequestKey = 'exampleUserSearch'

class UserSearchExample extends React.Component {

  render() {
    const { users, status, statusCode, dispatch } = this.props
    console.log('user search status: ', status)
    console.log('user search resources: ', users, statusCode)
    return (
      <>
        <button style={{ display: 'block' }} onClick={ () => {
          dispatch({
            type: actionTypes.READ_RESOURCES_PENDING,
            resourceType: 'users',
            requestKey: getRequestKey,
            getter: getUsersSearch,
            list: 'search',
            args: {
              testArgument: "hello world"
            }
          })
        }}>GetUsers</button>
      </>
    )
  }

}

function mapStateToProps(state) {
  const users = getResources(state.users, 'search')
  const status = getStatus(
    state.users,
    `requests.${getRequestKey}.status`
  )
  const statusCode = (state.users.requests[getRequestKey]
    || {statusCode: undefined}).statusCode
  return {
    users,
    status,
    statusCode
  }
}

export default connect(mapStateToProps)(UserSearchExample)
