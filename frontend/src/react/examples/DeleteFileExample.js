
import React from 'react'
import { connect } from 'react-redux'
import { actionTypes, getStatus, getResources } from 'redux-resource';

const REQUEST_KEY = 'deleteFile'

class DeleteFileExample extends React.Component {
  render() {
    const { files, status, statusCode, dispatch } = this.props
    console.log('delete user status: ', status, statusCode)
    console.log('delete user resources: ', files)
    return (
      <>
        <button style={{ display: 'block' }} onClick={ () => {
        }}>DeleteUser</button>
      </>
    )
  }
}

function mapStateToProps(state) {
  const files = getResources(state.files, 'files')
  const status = getStatus(
    state.files,
    `requests.${REQUEST_KEY}.status`
  )
  const statusCode = (state.files.requests[REQUEST_KEY]
    || {statusCode: undefined}).statusCode
  return {
    files,
    status,
    statusCode
  }
}

export default connect(mapStateToProps)(DeleteFileExample)
