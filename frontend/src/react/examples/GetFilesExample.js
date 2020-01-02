
import React from 'react'
import { connect } from 'react-redux'
import { actionTypes, getStatus, getResources } from 'redux-resource';

import { getFiles } from '../../actions/services/files'

const getFilesRequestKey = 'getFiles'

class UserSearchExample extends React.Component {

  render() {
    const { files, status, statusCode, dispatch } = this.props
    console.log('get files status: ', status)
    console.log('get files resources: ', files, statusCode)
    return (
      <>
        <button style={{ display: 'block' }} onClick={ () => {
          dispatch({
            type: actionTypes.READ_RESOURCES_PENDING,
            resourceType: 'files',
            requestKey: getFilesRequestKey,
            getter: getFiles,
            list: 'files',
            args: {
              testArgument: 'username'
            }
          })
        }}>GetFiles</button>
      </>
    )
  }
}

function mapStateToProps(state) {
  const files = getResources(state.files, 'files')
  const status = getStatus(
    state.files,
    `requests.${getFilesRequestKey}.status`
  )
  const statusCode = (state.files.requests[getFilesRequestKey]
    || {statusCode: undefined}).statusCode
  return {
    files,
    status,
    statusCode
  }
}

export default connect(mapStateToProps)(UserSearchExample)
