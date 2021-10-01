import React, { useState } from 'react'
import productImg from './product.jpg';

export default function ProrductCard({name, price}) {
    const [cart, addToCard] = useState(false);
    return (
        <>
            <img src={productImg} alt={name} />
            <h4>{name}</h4>
            <h5>${price}</h5>
            <button className={cart && 'cart'} onClick={() => addToCard(true)}>{cart ? 'Already Added' : 'Add to Cart'}</button>
        </>
    )
}

// export default class ProrductCard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             text: 'My State'
//         }
//     }

//     // componentDidMount() {
//     //     axios.get('https://jsonplaceholder.typicode.com/todos/1')
//     //     .then(response => console.log(response.data))
//     //     .catch(err => console.log(err))
//     // }

//     render() {
//         return (
//             <>
//                 <img src={productImg} alt={this.props.name} />
//                 <h4>{this.props.name}</h4>
//                 <h5>${this.props.price}</h5>
//                 <p>{this.state.text}</p>
//                 <button onClick={() => this.setState({text: 'Changed'})}>Change</button>
//             </>
//         )
//     }
// }