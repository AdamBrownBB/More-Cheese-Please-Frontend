import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'




const NavBar = () => {
    return (
        <div>
            <p>hi</p>
            <Button as={Link} to="/home">
                To homepage
            </Button>
        </div>
    );
}

export default NavBar;
