import React from 'react';
import CheeseDropDown from '../components/CheeseDropDown'
import CheeseList from './CheeseList';
import { Divider } from 'semantic-ui-react'


class CheeseContainer extends React.Component {

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
            <h1>Choose your cheeses</h1>
            <p>You'll need one of each flavor of cheese to make a plate.</p>
     
            <CheeseDropDown changeFlavor={this.changeFlavor}/>
                <Divider hidden></Divider>
            <CheeseList cheeses={this.renderCheeses()}
                    clickHandler={this.props.clickHandler}
                />
        </div>
    )};
}

export default CheeseContainer;

