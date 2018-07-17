import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";


class Header extends Component {
		
	state = { activeItem: 'home' }
	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
  	const { activeItem } = this.state
    return (
    	<div>
	        <Menu color="black" inverted>
				<NavLink to="/">
					<Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
				</NavLink>
				<NavLink to="/activity">
					<Menu.Item name='activity' active={activeItem === 'activity'} onClick={this.handleItemClick} />
				</NavLink>
				<NavLink to="/counter">
					<Menu.Item name='counter' active={activeItem === 'counter'} onClick={this.handleItemClick} />
				</NavLink>
				<NavLink to="/contact">
					<Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick} />
				</NavLink>
			</Menu>
        </div>
    )
  }
}

export default Header;

