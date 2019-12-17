import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import CheeseList from '../containers/CheeseList';

class CheeseCard extends React.Component {
    render() {
        console.log(this.props)
    return (
        <div>
           
            <Card>
                <Image src={this.props.cheese.image} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{this.props.cheese.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>TBC, check classname specs</span>
                    </Card.Meta>
                    <Card.Description>
                        About this chz
                    </Card.Description>
                </Card.Content>
            </Card>

        </div>
    )};
}




// class CheeseCard extends Component {
//     render() {
//         return (
//             <div  onClick={() => {this.props.clickHandler(this.props.cheese)
//             }}>
//                 <img id="image" alt={this.props.cheese.name} src={this.props.cheese.image} />
//                 {this.props.cheese.name}
//             </div>
//         );
//     }
// }

export default CheeseCard;