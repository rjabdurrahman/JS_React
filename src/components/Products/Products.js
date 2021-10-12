import React from 'react'
import ProrductCard from '../ProductCard/ProrductCard'
import styled from '@emotion/styled'

export default function Products() {
    let products = [
        {
            name: "Antec Signature PLATINUM 1300 1300W 80 Plus Platinum Fully Modular Power Supply",
            price: 1000
        },
        {
            name: "CORSAIR ICUE SP120 RGB ELITE 120MM white PWM FAN TRIPLE PACK",
            price: 2000
        }
    ]
    const ProductContainer = styled.div`
        ul {
            margin: 0;
            list-style: none;
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
            background: #f2f4f8;
            padding: 20px;
        }
    `
    return (
        <ProductContainer>
            <ul>
                {products.map(p => (
                    <li key={p.name}>
                        <ProrductCard {...p}></ProrductCard>
                    </li>
                ))}
            </ul>
        </ProductContainer>
    )
}
