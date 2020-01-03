
import React from 'react'
import { connect } from 'react-redux'
import { getStatus, getResources } from 'redux-resource';

import { getFiles } from '../../globals/actionCreators'

const REQUEST_KEY = 'getFiles'

class GetFilesExample extends React.Component {
  render() {
    const { files, status, statusCode, dispatch } = this.props
    console.log('get files status: ', status)
    console.log('get files resources: ', files, statusCode)
    return (
      <>
        <button style={{ display: 'block' }} onClick={ () => {
          dispatch(getFiles(
            REQUEST_KEY,
            'filesOfTommy',
            '9e32f25dab6c4d7f8bd54a4bfba9ccd9',
            '<authToken>'
          ))
        }}>GetFiles</button>
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

export default connect(mapStateToProps)(GetFilesExample)
