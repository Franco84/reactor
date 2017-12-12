import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import axios from 'axios'
import emailIcon from '../../assets/ic-email.png'
import passwordIcon from '../../assets/ic-password.png'
import userIcon from '../../assets/ic-username.png'

class SignupForm extends Component {

  constructor(props) {
    super(props)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onUserChange = this.onUserChange.bind(this)
    this.state = {email: '', password: '', username: ''}
  }

  onEmailChange(evt) {
    this.setState({
      password: this.state.password, email: evt.target.value, username: this.state.username
    })
  }

  onUserChange(evt) {
    this.setState({
      password: this.state.password, email: this.state.email, username: evt.target.value
    })
  }

  onPasswordChange(evt) {
    this.setState({
      password: evt.target.value, email: this.state.email, username: this.state.username
    })
  }

  onFormSubmit(event) {
    event.preventDefault()
    axios.post('http://dev3.apppartner.com/Reactors/scripts/user-signup.php', {
        username: event.target.username.value,
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
          <input name='username' onChange={this.onUserChange} value={this.state.username} placeholder='Username' />
          <img src={userIcon} className='input-img' />
        </div>
        <br/>
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
        <div><button className='login-button' type='submit'>SIGN UP</button></div>
      </form>
    )
  }
}

export default SignupForm
