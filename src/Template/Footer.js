import React, { Component } from 'react';
import { Menu } from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
    	<div>
    		<Menu color="black" inverted borderless>
    			<Menu.Item>
    				Footer
    			</Menu.Item>
    		</Menu>
    	</div>
    )
  }
}

export default Footer;