
import React from 'react'
import { connect } from 'react-redux'
import { getResources } from 'redux-resource'

import {
  withStyles
} from '@material-ui/core'

const styles = {}

class FileViewList extends React.Component {
  render() {
    const { classes, files } = this.props
    return (
      <>
        { files.map( f =>
            <h3 key={f.id}>{f.name}</h3>
          )
        }
      </>
    )
  }
}

function byName(f1, f2) {
  return f1.name < f2.name ? -1 : 1
}

function mapStateToProps(state, props) {
  const files = getResources(state.files, props.list)
  return {
    files: files.filter(f => f.path === props.path).sort(byName)
  }
}

export default withStyles(styles)(connect(mapStateToProps)(FileViewList))
