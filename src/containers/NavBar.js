import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu, Sticky } from 'semantic-ui-react'


class NavBar extends Component {

    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
     

    render() { 
       const { activeItem } = this.state
       
       return (
        <Sticky>
            <Menu pointing size="large" color='orange'>
                <Menu.Item
                    as={Link} to="/plates"
                    name='plates'
                    active={activeItem === 'plates'}
                    content='Create Cheese Plate'
                    onClick={this.handleItemClick}
                    color='orange'
                />
                <Menu.Item
                    as={Link} to="/cheeses"
                    name='cheeses'
                    active={activeItem === 'cheeses'}
                    content='Search Cheeses'
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
           </Sticky>
            )
    }
}

export default NavBar;
