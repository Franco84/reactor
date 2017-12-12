import React from 'react'
import {Grid} from 'semantic-ui-react'

const Description = () => {
  return (
    <Grid.Row>
      <Grid.Column width={4}></Grid.Column>
      <Grid.Column verticalAlign='middle' className='left-intro intro' width={3}>
        <div>WHAT WE DO</div>
      </Grid.Column>
      <Grid.Column width={2}></Grid.Column>
      <Grid.Column verticalAlign='middle' className='right-intro intro' width={7}>
        <div className='description-header'>We do</div>
        <div className='description-paragraph'><p>
          The quick, brown fox jumps over a lazy dog. <br/>
          DJs flock by when MTV ax quiz prog.<br/>
          Junk MTV quiz graced by fox whelps.<br/>
          Bawds jog, flick quartz, vex nymphs.</p></div>
      </Grid.Column>
    </Grid.Row>
  )
}

export default Description
