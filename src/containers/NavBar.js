import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const NavBar = () => {
    return (
        <div>
            
            <Button  active className="orange" as={Link} to="/plates">
                Create Cheese Plate
            </Button>
            <Button active as={Link} to="/cheeses">
                Search Cheeses
            </Button>
            <Button active as={Link} to="/drinks">
                Search Drinks
            </Button>
        </div>
    );
}

export default NavBar;
