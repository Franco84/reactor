import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import axios from 'axios'

class Newsletter extends Component {

  constructor(props) {
    super(props)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.state = {email: ''}
  }

  onEmailChange(evt) {
    this.setState({
      email: evt.target.value
    })
  }

  onFormSubmit(event) {
    event.preventDefault()
    axios.post('http://dev3.apppartner.com/Reactors/scripts/add-email.php', {
        email: event.target.email.value
    })
    .then((response) => {console.log(response)})
  }

  render() {
    return (
      <Grid.Row>
        <Grid.Column className='newsletter-text' width={16}>
          <p>SUBSCRIBE TO NEWSLETTER</p>
        </Grid.Column>
        <Grid.Column width={16}>
          <div style={{textAlign: 'center', paddingTop: '30px', paddingBottom: '50px'}}>
            <form onSubmit={this.onFormSubmit}>
              <input name='email' value={this.state.email} onChange={this.onEmailChange} placeholder=' Your Email' className='newsletter-input' />
              <button type='submit' className='newsletter-button'>Subscribe</button>
            </form>
            </div>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

export default Newsletter
