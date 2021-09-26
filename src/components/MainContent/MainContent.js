import axios from 'axios';
import { useEffect, useState } from 'react';

export default function MainContent() {
    // States
    const [products, setProducts] = useState([]);
    // LifeCycle Hooks
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/products`)
        .then(response => setProducts(response.data))
        .catch(err => console.log(err.message))
    })
    return (
        // JSX
        <div className="main-content">
            <h1>Products</h1>
            <div>
                <ul>
                    {products.map(product => <li>
                        <h2>{product.name}</h2>
                        <h2>${product.price}</h2>
                    </li>)}
                </ul>
            </div>
        </div>
    );
}