
import React from 'react'
import { connect } from 'react-redux'

class UserExample extends React.Component {

  render() {
    const { users, dispatch } = this.props
    return (
      <>
        <button onClick={ () => {
        }}>GetUsers</button>
      </>
    )
  }

}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default UserExample
