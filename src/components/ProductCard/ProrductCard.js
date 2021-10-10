import styled from '@emotion/styled';
import React from 'react'
import productImg from './product.jpg';
import { FaCartPlus } from 'react-icons/fa';

export default function ProrductCard({ name, price }) {
    const ProductContainer = styled.div`
        display: inline-block;
        position: relative;
        border: 1px solid gray;
        img {
            height: 300px;
            width: 300px;
        }
        h5 {
            background-color: black;
            color: white;
            margin: 0;
            position: absolute;
            right: 0;
            top: 0;
            font-size: 22px;
            padding: 8px 10px;
        }
        >div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 10px;
            h4 {
                margin: 0;
                font-size: 25px;
            }
        }
    `
    return (
        <ProductContainer>
            <img src={productImg} alt={name} />
            <div>
                <h4>{name}</h4>
                <FaCartPlus size={25} />
            </div>
            <h5>${price}</h5>
        </ProductContainer>
    )
}