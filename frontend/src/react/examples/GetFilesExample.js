
import React from 'react'
import { connect } from 'react-redux'
import { actionTypes, getStatus, getResources } from 'redux-resource';

const REQUEST_KEY = 'getFiles'

class GetFilesExample extends React.Component {
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
            requestKey: REQUEST_KEY,
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
