import React, {Component} from 'react'
import Banner from './Banner'
import Description from './Description'
import Cooking from './Cooking'
import GalleryTitle from './GalleryTitle'
import Gallery from './Gallery'
import Newsletter from './Newsletter'
import Footer from './Footer'
import {Grid, Divider} from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Grid>
        <Banner />
        <Description />
        <Divider />
        <Cooking />
        <GalleryTitle />
        <Gallery />
        <Divider />
        <Newsletter />
        <Footer />
      </Grid>
    )
  }
}

export default App
