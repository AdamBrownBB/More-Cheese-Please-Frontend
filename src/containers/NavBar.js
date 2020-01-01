import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { Menu } from 'semantic-ui-react'


class NavBar extends Component {

    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
     

    render() { 
       const { activeItem } = this.state
       
       return (
        //    <div class="ui fixed top sticky">
            <Menu pointing >
                <Menu.Item
                    as={Link} to="/plates"
                    name='plates'
                    active={activeItem === 'plates'}
                    content='Create Cheese Plate'
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={Link} to="/cheeses"
                    name='cheeses'
                    active={activeItem === 'cheeses'}
                    content='Search Cheses'
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={Link} to="/drinks"
                    name='drinks'
                    active={activeItem === 'drinks'}
                    content='Search Drinks'
                    onClick={this.handleItemClick}
                />

               

               
           
            </Menu>
                // </div>
            )
        }
}

export default NavBar;
