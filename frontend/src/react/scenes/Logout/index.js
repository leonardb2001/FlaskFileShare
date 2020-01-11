
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { logout } from '../../../globals/actionCreators'

class Logout extends React.Component {
  componentDidMount() {
    this.props.dispatch(logout())
  }

  render() {
    return <Redirect to='/' />
  }

}

export default connect(state => ({}))(Logout)
