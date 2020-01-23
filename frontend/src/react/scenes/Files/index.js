
import React from 'react'
import { getStatus } from 'redux-resource'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {
  Box,
  withStyles
} from '@material-ui/core'

import FileViewList from './FileViewList'
import { Loader } from 'react/elements'
import { getFiles } from '../../../globals/actionCreators'

const REQUEST_KEY = '__currentFiles'

const styles = {
  filesWrapper: {
    maxWidth: '1000px',
    margin: '0 auto',
    position: 'relative'
  }
}

class Files extends React.Component {
  componentDidMount() {
    if (this.props.status.idle) {
      this.fetchFiles()
    }
  }

  fetchFiles() {
    this.props.dispatch(getFiles(
      REQUEST_KEY,
      REQUEST_KEY,
      '9e32f25dab6c4d7f8bd54a4bfba9ccd9',
      'secret_auth_token'
    ))
  }

  render() {
    const { status, classes } = this.props
    return (
      <Box className={classes.filesWrapper}>
        { status.pending &&
          <Loader/>
        }
        { status.succeeded &&
          <FileViewList list={REQUEST_KEY}/>
        }
        { status.failed &&
          <h1>failed</h1>
        }
      </Box>
    )
  }
}

function mapStateToProps(state) {
  const status = getStatus(
    state.files,
    `requests.${REQUEST_KEY}.status`
  )
  return {
    status
  }
}

export default withStyles(styles)(connect(mapStateToProps)(withRouter(Files)))
