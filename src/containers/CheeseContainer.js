import React from 'react';
import CheeseDropDown from '../components/CheeseDropDown'
import CheeseList from './CheeseList';

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
            <h1>chz container</h1>
            <CheeseDropDown changeFlavor={this.changeFlavor}/>
            <CheeseList cheeses={this.renderCheeses()}/>
        </div>
    )};
}

export default CheeseContainer;