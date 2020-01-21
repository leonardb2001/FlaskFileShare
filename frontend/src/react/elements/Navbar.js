
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

const styles = theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  light: {
    backgroundColor: theme.palette.primary.light
  }
})

class Navbar extends React.Component {
  render() {
    const { isAuthenticated, classes } = this.props
    return (
      <>
        <AppBar position='static'>
          <Toolbar className={classes.toolbar}>
            <Button size='small' variant='contained' className={classes.light} component={Link} to='/'>home</Button>
            { isAuthenticated &&
            <ButtonGroup size='small' variant='contained' color='primary'>
              <Button className={classes.light} component={Link} to='/users/tommy'>example user</Button>
              <Button className={classes.light} component={Link} to='/user-search/test'>search</Button>
              <Button className={classes.light} component={Link} to='/logout'>logout</Button>
            </ButtonGroup>
            }
            { !isAuthenticated &&
            <ButtonGroup size='small' variant='contained'>
              <Button className={classes.light} component={Link} to='/login'>login</Button>
              <Button className={classes.light} component={Link} to='/register'>register</Button>
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
