import React from 'react'
import {Grid} from 'semantic-ui-react'
import one from '../../assets/1.png'
import two from '../../assets/2.png'

const Cooking = () => {
  return (
    <Grid.Row className='cooking'>
      <Grid.Column width={1}></Grid.Column>
      <Grid.Column className='left-intro intro' width={3}>
        <img src={one} className='cooking-pic' />
      </Grid.Column>
      <Grid.Column verticalAlign='middle' width={4}>
        <div className='cooking-text cooking-header'>Regional Cuisine Down Home Southern Cooking</div>
        <br/>
        <div className='cooking-text cooking-paragraph'><p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.</p></div>
      </Grid.Column>
      <Grid.Column width={1}></Grid.Column>
      <Grid.Column className='right-intro intro' width={3}>
        <img src={two} className='cooking-pic' />
      </Grid.Column>
      <Grid.Column verticalAlign='middle' width={4}>
        <div className='cooking-text cooking-header'><span>Pos Hardware More Options In Less Space</span></div>
        <br/>
        <div className='cooking-text cooking-paragraph'><p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.</p></div>
      </Grid.Column>
      <Grid.Column width={1}></Grid.Column>
    </Grid.Row>
  )
}

export default Cooking
