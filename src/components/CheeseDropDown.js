import React from 'react'
import { Dropdown } from 'semantic-ui-react'




const cheeseFlavors = [
    {
        key: 'all',
        text: 'All',
        value: 'all'
        
    },
    {
        key: 'mild',
        text: 'Mild',
        value: 'mild'
    },
    {
        key: 'medium',
        text: 'Medium',
        value: 'medium'
    },
    {
        key: 'bold',
        text: 'Bold',
        value: 'bold'
    },
    {
        key: 'bleu',
        text: 'Bleu',
        value: 'bleu'
    }

]
class CheeseDropdown extends React.Component {

changeHandler = (e, name) => {
    this.props.changeFlavor(name.value)
}

    render() {
        return (
            <div>
        <Dropdown onChange={this.changeHandler}
            placeholder='Select Flavor'
            fluid
            selection
            options={cheeseFlavors}
        />
        </div >


)}
}
export default CheeseDropdown;