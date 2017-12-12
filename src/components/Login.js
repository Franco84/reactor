import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import onboarding from '../../assets/onboarding-bg.png'

class Login extends Component {

  constructor(props) {
    super(props)
    this.signupActive = this.signupActive.bind(this)
    this.loginActive = this.loginActive.bind(this)
    this.onSignupClick = this.onSignupClick.bind(this)
    this.onLoginClick = this.onLoginClick.bind(this)
    this.state = {screen: 'signup'}
  }

  signupActive() {
    if (this.state.screen === 'signup') {
      return 'login-area-active'
    } else {
      return 'login-area-inactive'
    }
  }

  loginActive() {
    if (this.state.screen === 'login') {
      return 'login-area-active'
    } else {
      return 'login-area-inactive'
    }
  }

  onSignupClick() {
    this.setState({
      screen: 'signup'
    })
  }

  onLoginClick() {
    this.setState({
      screen: 'login'
    })
  }

  show() {
    if (this.state.screen === 'signup') {
      return <SignupForm />
    } else {
      return <LoginForm />
    }
  }


  render() {
    return (
      <div className='login-bg'>
        <div className="top-left"><Link to='/'>Reactor</Link></div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={6}></Grid.Column>
            <Grid.Column width={4}>
              <div className='login-area'>
                <span onClick={this.onSignupClick} className={this.signupActive() + ' right-pad'}>SIGN UP</span>
                <span onClick={this.onLoginClick} className={this.loginActive()}>LOGIN</span>
                {this.show()}
              </div>
            </Grid.Column>
            <Grid.Column width={6}></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Login
