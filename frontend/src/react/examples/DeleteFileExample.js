
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
            '9e32f25dab6c4d7f8bd54a4bfba9ccd9.n9an3l2kd8sna92n',
            '<authToken>'
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
