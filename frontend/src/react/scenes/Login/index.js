
import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import {
  Button,
  Card,
  CardActions,
  IconButton,
  InputAdornment,
  TextField,
  withStyles
} from '@material-ui/core'

import { Loader } from '../../elements'
import { getAuthToken } from '../../../globals/actionCreators'
import { VisibilityIcon, VisibilityOffIcon } from '../../icons/functions'

const styles = {
  loginButton: {
    display: 'block'
  },
  card: {
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'column'
  },
  logo: {
    margin: '20px auto 0'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto 20px'
  },
  loginElement: {
    margin: '8px 0 4px 0',
    width: '100%'
  }
}

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showPassword: false,
      login: '',
      password: ''
    }
  }

  handleClickShowPassword = (event) => {
    this.setState({
      showPassword: !this.state.showPassword
    })
  }

  handleInputChange = field => event => {
    this.setState({
      [field]: event.target.value
    })
  }

  login = (event) => {
    event.preventDefault();
    const { login, password } = this.state
    this.props.dispatch(getAuthToken(login, password));
  }

  renderLogin = () => {
    const { showPassword, login, password } = this.state
    const { classes } = this.props
    return (
      <Card square className={classes.card}>
        <p><i>Do not enter your real credentials! Right credentials: tommy password123</i></p>
        <CardActions>
          <form className={classes.container}>
            <TextField
              className={classes.loginElement}
              label='email or username'
              margin='dense'
              name='login'
              onChange={this.handleInputChange('login')}
              required
              value={login}
              variant='outlined'
            />
            <TextField
              autoComplete='current-password'
              className={classes.loginElement}
              id='password-input'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={this.handleClickShowPassword}
                    >
                      { showPassword ? <VisibilityIcon /> : <VisibilityOffIcon /> }
                    </IconButton>
                  </InputAdornment>
                )
              }}
              label='Password'
              margin='dense'
              onChange={this.handleInputChange('password')}
              required
              type={showPassword ? 'text' : 'password'}
              value={password}
              variant='outlined'
            />
            <Button
              className={classes.loginElement}
              color='primary'
              onClick={this.login}
              variant='contained'
            >
              login
            </Button>
          </form>
        </CardActions>
      </Card>
    )
  }

  render() {
    const { statusCode, isAuthenticated, status } = this.props
    if (isAuthenticated) {
      const redirect = (this.props.location.state || {}).redirect
      return (
        <Redirect to={redirect || '/'} />
      )
    }
    return (
      <>
      { status.failed && statusCode === 401 &&
        <h3>Wrong Credentials</h3>
      }
      { status.failed && statusCode === null &&
        <h3>Internal Server Error</h3>
      }
      { status.pending &&
        <Loader/>
      }
      { this.renderLogin() }
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    status: state.auth.status,
    statusCode: state.auth.statusCode
  }
}

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Login)))
