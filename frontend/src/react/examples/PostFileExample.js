
import React from 'react'
import { connect } from 'react-redux'
import { actionTypes, getStatus, getResources } from 'redux-resource';

import { postFile } from '../../actions/services/files'

const REQUEST_KEY = 'postFile'

class PostFilesExample extends React.Component {
  render() {
    const { files, status, statusCode, dispatch } = this.props
    console.log('post file status: ', status, statusCode)
    console.log('post file resources: ', files)
    return (
      <>
        <button style={{ display: 'block' }} onClick={ () => {
          dispatch({
            type: actionTypes.CREATE_RESOURCES_PENDING,
            resourceType: 'files',
            requestKey: REQUEST_KEY,
            getter: postFile,
            list: 'files',
            resource: {
              name: 'Vorlesung3.mp4',
              path: 'Mitschnitte/',
              type: 'f'
            }
          })
        }}>PostFile</button>
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

export default connect(mapStateToProps)(PostFilesExample)
