import React, { Component } from 'react';

import { Link } from "react-router-dom";

import { Menu } from "semantic-ui-react";

class Header extends Component {
  /*
    constructor(props) {
        super(props);
        this.state = { 
          mainPages:['/', '/activity', '/counter'],
          activeItem: 'home'
        };

        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(e, { name }){
          this.setState({
            activeItem: name
          })
      }
  */
    
  state = {
    activeItem: '',
    mainPages:['/activity', '/counter', '/contact', 'admin']
  }

  handleClick = (e, { name }) => this.setState({
    activeItem: name
  })

  render() {
    const { activeItem, mainPages } = this.state
    return (
      <div>
        <Menu color="black" inverted>
          {
            mainPages.map(page => (
              <Menu.Item as={Link} to={page} name={page} active={activeItem === page} onClick={this.handleClick}/>
            ))
          }
        </Menu>
      </div>
    )
  }
}
export default Header;

