import React, {Component} from 'react'
import {Grid, Card, Image} from 'semantic-ui-react'
import three from '../../assets/3.png'
import four from '../../assets/4.png'
import five from '../../assets/5.png'
import six from '../../assets/6.png'


class Gallery extends Component {

  createCards() {
  const places = [['East Josianefurt', '085 Daron Via', three], ['South Cristopherport', '162 Chandler Ville', four], ['Concepcionbury', '7643 Kylie Burgs', five], ['Reychester', '5590 Gabe Views Apt. 044', six]]
  return places.map((place, index) => {
    return (
      <Grid.Column className='gallery-column' key={index} width={3}>
        <Card className='card-whole' fluid>
          <Image id='card-img' src={place[2]} />
          <Card.Content>
            <Card.Header className='card-header' textAlign='center'>
              {place[0]}
            </Card.Header>
            <Card.Meta className='card-meta'>
              <span>{place[1]}</span>
            </Card.Meta>
          </Card.Content>
        </Card>
      </Grid.Column>
    )
    })
  }

  render() {
    return (
         <Grid.Row centered className='gallery-row'>
           {this.createCards()}
        </Grid.Row>
    )
  }
}

export default Gallery
