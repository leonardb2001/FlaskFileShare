
import React from 'react'
import { connect } from 'react-redux'
import { getResources } from 'redux-resource'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

import {
  Box,
  Breadcrumbs,
  Link as MLink,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  withStyles
} from '@material-ui/core'

import { FolderIcon, FileIcon } from 'react/icons/functions'

const styles = theme => ({
  parent: {
    position: 'absolute',
    width: '100%'
  },
  wrapper: {
    border: 'solid',
    borderRadius: '15px',
    borderWidth: '1px',
    borderColor: theme.palette.primary.dark,
    marginTop: '30px',
    overflow: 'hidden',
    textAlign: 'center'
  },
  navigation: {
    display: 'flex',
    backgroundColor: theme.palette.primary.dark
  },
  breadcrumbs: {
    margin: '10px'
  }
})

function parentFolderRoutes(path) {
  const components = path.split('/').filter(r => r !== '')
  let result = []
  result.push({
    route: '',
    name: 'root'
  })
  for (let i = 0; i < components.length; i += 1) {
    result.push({
      route: components.slice(0, i + 1).join('/'),
      name: components[i]
    })
  }
  return result
}


class FileViewList extends React.Component {
  render() {
    const { classes, files, match } = this.props
    const folder = match.params.folder || ''
    const url = match.url.replace(/\/$/g, '') // remove trailing "/" in url
    const folderPaths = parentFolderRoutes(folder)
    return (
      <Box className={classes.parent}>
        <Box className={classes.wrapper}>
          <Box className={classes.navigation}>
            <Breadcrumbs
              separator={<Typography color='primary'>/</Typography>}
              className={classes.breadcrumbs}
            >
              { 
                folderPaths.map(r => {
                  if (r.route !== folder) {
                    return (
                      <MLink
                        component={Link}
                        to={'/users/' + match.params.username + '/' + r.route}
                        key={r.route}
                      ><b>{r.name}</b></MLink>
                    )
                  }
                  return <Typography color='primary' key={r.route}><b>{r.name}</b></Typography>
                })
              }
            </Breadcrumbs>
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
                  <ListItem button component={Link} to={url + '/' + f.name} key={f.id}>
                    <ListItemIcon><FolderIcon/></ListItemIcon>
                    <ListItemText primary={f.name}/>
                  </ListItem>
                )
              }
              })
            }
            { files.length === 0 &&
              <h3>Hier gibt es keine Dateien.</h3>
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
