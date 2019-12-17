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



const CheeseDropdown = () => (
    <Dropdown
        placeholder='Select Flavor'
        fluid
        selection
        options={cheeseFlavors}
    />
)

export default CheeseDropdown;