
import React from 'react'
import { connect } from 'react-redux'
import { getStatus, getResources } from 'redux-resource';

import { deleteFile } from '../../globals/actionCreators'

const REQUEST_KEY = 'deleteFile'

class DeleteFileExample extends React.Component {
  render() {
    const { files, status, statusCode, dispatch } = this.props
    console.log('delete user: ', files, status, statusCode)
    return (
      <>
        <button style={{ display: 'block' }} onClick={ () => {
          dispatch(deleteFile(
            REQUEST_KEY,
            'ni28fn29ap2ndc23',
            'secret_auth_token'
          ))
        }}>DeleteFile</button>
      </>
    )
  }
}

function mapStateToProps(state) {
  const files = getResources(state.files, 'filesOfTommy')
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
