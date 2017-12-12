import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import axios from 'axios'
import emailIcon from '../../assets/ic-email.png'
import passwordIcon from '../../assets/ic-password.png'

class LoginForm extends Component {

  constructor(props) {
    super(props)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.state = {email: '', password: ''}
  }

  onEmailChange(evt) {
    this.setState({
      password: this.state.password, email: evt.target.value
    })
  }

  onPasswordChange(evt) {
    this.setState({
      password: evt.target.value, email: this.state.email
    })
  }

  onFormSubmit(event) {
    event.preventDefault()
    debugger
    axios.post('http://dev3.apppartner.com/Reactors/scripts/user-login.php', {
        email: event.target.email.value,
        password: event.target.password.value
    })
    .then((response) => {console.log(response)})
  }

  render() {
    return (
      <form className='reactor-form' onSubmit={this.onFormSubmit}>
        <br />
        <div className='form-input'>
          <input name='email' onChange={this.onEmailChange} value={this.state.email} placeholder='Email' />
          <img src={emailIcon} className='input-img' />
        </div>
        <br/>
        <div className='form-input'>
          <input name='password' onChange={this.onPasswordChange} value={this.state.password} type='password' placeholder='Password' />
          <img src={passwordIcon} className='input-img' />
        </div>
        <br />
        <div><button className='login-button' type='submit'>Login</button></div>
      </form>
    )
  }
}

export default LoginForm
