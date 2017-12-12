import React from 'react'
import banner from '../../assets/banner.png'
import {Grid} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const Banner = () => {
  return (
    <Grid.Row>
      <Grid.Column width={16}>
        <div className='container'>
          <img src={banner} />
          <div className="top-left">Reactor</div>
          <div className="top-right"><Link to='/login'>Login</Link></div>
          <div className="centered-text">Hello, welcome to Reactor</div>
        </div>
      </Grid.Column>
    </Grid.Row>
  )
}

export default Banner
