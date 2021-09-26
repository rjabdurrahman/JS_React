import React from 'react'
import ProrductCard from '../ProductCard/ProrductCard'
import styled from '@emotion/styled'

export default function Products() {
    let products = [
        {
            name: "A",
            price: 1000
        },
        {
            name: "B",
            price: 2000
        },
        {
            name: "C",
            price: 3000
        },
        {
            name: "D",
            price: 4000
        },
    ]
    const ProductContainer = styled.ul`
        list-style: none;
        display: flex;
        gap: 20px;
        justify-content: center;
        flex-wrap: wrap;
        li {
            padding: 20px;
            background: lightgray;
            position: relative;
            img {
                height: 200px;
                width: 250px;
            }
            h5 {
                margin: 0;
                position: absolute;
                top: 0;
                right: 0;
                font-size: 22px;
                background-color: rgba(255, 255, 255, 0.8);
                padding: 12px 8px;
            }
        }
    `
    return (
        <div>
            <h1>Products</h1>
            <ProductContainer>
                {products.map(p => <li><ProrductCard {...p}></ProrductCard></li>)}
            </ProductContainer>
        </div>
    )
}
