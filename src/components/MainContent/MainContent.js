import axios from 'axios';
import { useEffect, useState } from 'react';
import ProrductCard from '../ProductCard/ProrductCard';

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
            <h1 className="f-exo">Products</h1>
            <div style={{display: 'flex', gap: '10px', margin: '100px 10px'}}>
                {products.map(product => <ProrductCard {...product} />)}
            </div>
        </div>
    );
}