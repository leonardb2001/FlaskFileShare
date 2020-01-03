
import React from 'react'
import { connect } from 'react-redux'
import { actionTypes, getStatus, getResources } from 'redux-resource';

const REQUEST_KEY = 'exampleUserSearch'

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
            requestKey: REQUEST_KEY,
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
