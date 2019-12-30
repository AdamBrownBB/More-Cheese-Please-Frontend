import React from 'react';
import CheeseDropDown from '../components/CheeseDropDown';
import CheeseSearchList from './CheeseSearchList';

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
                <h3>Pick a Cheese</h3>
                <p>Choose any cheese to see what drinks pair well with it</p>
                <CheeseDropDown changeFlavor={this.changeFlavor} />

                <CheeseSearchList cheeses={this.renderCheeses()}
                    // clickHandler={this.props.clickHandler}
                />
            </div>
        )}
}

export default CheeseSearch;