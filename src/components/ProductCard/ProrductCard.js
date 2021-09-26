import React from 'react'
import productImg from './product.jpg';

export default function ProrductCard({name, price}) {
    return (
        <>
            <img src={productImg} alt={name} />
            <h4>{name}</h4>
            <h5>${price}</h5>
        </>
    )
}
