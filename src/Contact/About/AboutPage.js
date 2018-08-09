import React, { Component } from "react";

import { Link } from "react-router-dom";

import  { Grid, Header, Item, Divider } from "semantic-ui-react";

import Title from "../../Template/Title";
 
class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages:[
        {
          name:'Cell',
          image: 'http://cdn.onlinewebfonts.com/svg/img_302325.png',
          desc: 'This is our Cell Contact',
          link: '/contact/about/1',
          lastUpdated:'1/01/16'
        },
        {
          name:'Email',
          image: 'http://www.pngonly.com/wp-content/uploads/2017/06/Email-PNG-Picture.png',
          desc: 'This is our Email Contact',
          link: '/contact/about/2',
          lastUpdated:'6/21/14'
        },
        {
          name:'Mail',
          image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/You%27ve_got_mail.png',
          desc: 'This is our Mail Contact',
          link: '/contact/about/3',
          lastUpdated:'2/13/11'
        }
      ]
    }
  }

  render(){
    return(
      <div>
        <Grid fluid padded>
          <Grid.Row>
            <Grid.Column>
              <Title name="About" desc="Learn about Us"/> 
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header as="h2" content="I am Ahmad Hammoudeh" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Item.Group unstackable divided link>
                {
                  this.state.pages.map( apage =>
                    <Item as={Link} to={apage.link}>
                      <Item.Image size="tiny" src={apage.image} />
                        <Item.Content verticalAlign='middle'>
                          <Item.Header as='h1'>{apage.name}</Item.Header>
                          <Item.Meta>
                            <span>Last Updated: {apage.lastUpdated}</span>
                          </Item.Meta>
                           <Divider fitted />
                          <Item.Description>
                            {apage.desc}
                          </Item.Description>
                        </Item.Content>
                    </Item>
                  )
                }
              </Item.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default ContactPage;