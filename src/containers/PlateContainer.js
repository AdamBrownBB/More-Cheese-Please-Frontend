import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import FlavorGrid from './FlavorGrid';
import SavedPlates from './SavedPlates';
import {connect} from 'react-redux'


class PlateContainer extends Component {


    componentDidMount() {
        this.fetchCheeses()
    }

    fetchCheeses = () => {
        fetch("http://localhost:3001/cheeses")
            .then(resp => resp.json())
            .then(data =>
                this.setState({
                    cheeses: data
                }))

    }

    render() {

     console.log(this.props)
     return (   
     <div>
            <h1>Plate Container</h1>
           
            <FlavorGrid />

            <Button>Suggest Plate</Button>
            <Button>Clear</Button>
            <Button>Save</Button>
            <Button>Share</Button>                    

            <SavedPlates/>
        </div>)
    }
} //end PlateContainer

export default PlateContainer;