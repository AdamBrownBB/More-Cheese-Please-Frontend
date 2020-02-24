import React from 'react';
import CheeseDropDown from '../components/CheeseDropDown';
import CheeseSearchList from './CheeseSearchList';
import {  Grid, GridRow } from 'semantic-ui-react'


class CheeseSearch extends React.Component {

    state = {
        flavor: "all",
    }

    renderCheeses = () => {
        let filteredByFlavor;

        switch (this.state.flavor) {
            case "all":
                filteredByFlavor = this.props.cheeses
                break;

            case "mild":
                filteredByFlavor = this.props.cheeses.filter((cheese) => {
                    return cheese.flavor === "mild"
                })
                break;
            case "medium":
                filteredByFlavor = this.props.cheeses.filter((cheese) => {
                    return cheese.flavor === "medium"
                })
                break;
            case "bold":
                filteredByFlavor = this.props.cheeses.filter((cheese) => {
                    return cheese.flavor === "bold"
                })
                break;
            case "bleu":
                filteredByFlavor = this.props.cheeses.filter((cheese) => {
                    return cheese.flavor === "bleu"
                })
                break;
            default: filteredByFlavor = this.props.cheeses
                break;

        }
        return filteredByFlavor
    }

    changeFlavor = (newFlavor) => {
        this.setState({
            flavor: newFlavor
        })
    }


    render() {  
        return (
            <div>
                <Grid celled>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <CheeseSearchList 
                                cheeses={this.renderCheeses()} 
                                changeFlavor={this.changeFlavor}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )}
}

export default CheeseSearch;