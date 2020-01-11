
import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import {
  AppBar,
  Button,
  ButtonGroup,
  Toolbar,
  withStyles
} from '@material-ui/core'

const styles = {
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}

class Navbar extends React.Component {
  render() {
    const { isAuthenticated, classes } = this.props
    return (
      <>
        <AppBar position='static'>
          <Toolbar className={classes.toolbar}>
            { !isAuthenticated &&
            <ButtonGroup variant='contained' color='secondary'>
              <Button component={Link} to='/login'>login</Button>
              <Button component={Link} to='/register'>register</Button>
            </ButtonGroup>
            }
          </Toolbar>
        </AppBar>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Navbar))
