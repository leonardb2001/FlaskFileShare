
import React from 'react'
import { connect } from 'react-redux'
import { getResources } from 'redux-resource'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles
} from '@material-ui/core'

import { FolderIcon, FileIcon, BackIcon } from 'react/icons/functions'

const styles = theme => ({
  parent: {
    position: 'absolute',
    width: '100%'
  },
  wrapper: {
    border: 'solid',
    borderRadius: '10px',
    borderWidth: '1px',
    borderColor: theme.palette.primary.dark,
    marginTop: '30px',
    overflow: 'hidden'
  },
  navigation: {
    display: 'flex',
    backgroundColor: theme.palette.primary.dark
  },
  back: {
    marginRight: '10px'
  }
})

function ListItemLink(props) {
  return <ListItem button component={Link} {...props} />;
}

class FileViewList extends React.Component {
  render() {
    const { classes, files, match } = this.props
    const folder = match.params.folder || ''
    const url = match.url.replace(/\/$/g, '') // remove trailing "/" in url
    const backPath = url.substring(0, url.lastIndexOf('/')) // remove last component of path
    return (
      <Box className={classes.parent}>
        <Box className={classes.wrapper}>
          <Box className={classes.navigation}>
            { folder != '' &&
              <Button
                className={classes.back}
                component={Link}
                to={backPath}
                startIcon={<BackIcon/>}
              >
                back
              </Button>
            }
            <h3>{folder}</h3>
          </Box>
          <List>
            { files.map( f => {
              if (f.type === 'f') {
                return (
                  <ListItem button key={f.id}>
                    <ListItemIcon><FileIcon/></ListItemIcon>
                    <ListItemText primary={f.name}/>
                  </ListItem>
                )
              } else {
                return (
                  <ListItemLink to={url + '/' + f.name} key={f.id}>
                    <ListItemIcon><FolderIcon/></ListItemIcon>
                    <ListItemText primary={f.name}/>
                  </ListItemLink>
                )
              }
              })
            }
          </List>
        </Box>
      </Box>
    )
  }
}

function byName(f1, f2) {
  return f1.name < f2.name ? -1 : 1
}

function mapStateToProps(state, props) {
  const files = getResources(state.files, props.list)
  const path = props.match.params.folder || ''
  return {
    files: files.filter(f => f.path === path).sort(byName)
  }
}

export default withStyles(styles)(withRouter(connect(mapStateToProps)(FileViewList)))
