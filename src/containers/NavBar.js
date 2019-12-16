import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'




const NavBar = () => {
    return (
        <div>
            <p>hi</p>
            <Button  active className="orange" as={Link} to="/home">
                Create Cheese Plate
            </Button>
            <Button class="ui button" as={Link} to="/home">
                Create Cheese Plate
            </Button>
        </div>
    );
}

export default NavBar;
