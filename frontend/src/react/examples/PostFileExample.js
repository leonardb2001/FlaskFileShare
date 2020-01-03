
import React from 'react'
import { connect } from 'react-redux'
import { getStatus, getResources } from 'redux-resource';

import { postFile } from '../../globals/actionCreators'

const REQUEST_KEY = 'postFile'

class PostFileExample extends React.Component {
  render() {
    const { files, status, statusCode, dispatch } = this.props
    console.log('post file: ', files, status, statusCode)
    return (
      <>
        <button style={{ display: 'block' }} onClick={ () => {
          dispatch(postFile(
            REQUEST_KEY,
            'filesOfTommy',
            'Vorlesung3.mp4',
            'Mitschnitte/',
            'f',
            '9e32f25dab6c4d7f8bd54a4bfba9ccd9',
            '<authToken>'
          ))
        }}>PostFile</button>
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

export default connect(mapStateToProps)(PostFileExample)
