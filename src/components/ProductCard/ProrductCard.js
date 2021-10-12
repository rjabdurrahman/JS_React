import styled from '@emotion/styled';
import React from 'react'
import productImg from './product.jpg';
import { FaCartPlus } from 'react-icons/fa';

export default function ProrductCard({ name, price }) {
    const ProductContainer = styled.div`
        background: white;
        display: inline-block;
        position: relative;
        border-radius: 10px;
        width: 320px;
        min-height: 280px;
        padding-bottom: 10px;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        button {
            padding: 8px 16px;
            background: #3749BB;
            color: #fff;
            border: 0;
            text-align: center;
        }
        img {
            width: 320px;
            height: 280px;
            border-radius: 10px;
        }
        h4 {
            margin: 0;
            padding: 0 8px;
            font-size: 20px;
        }
        h5 {
            margin: 8px 0;
            padding: 8px 0;
            line-height: 22px;
            font-size: 17px;
            font-weight: bold;
            color: #EF4A23;
            text-align: center;
            border-top: 1px solid silver;
            border-bottom: 1px solid silver;
        }
    `
    return (
        <ProductContainer>
            <img src={productImg} alt={name} />
            <h4>{name}</h4>
            <h5>${price}</h5>
            <button>
                <span>Buy Now</span>
                <FaCartPlus size={25} />
            </button>
        </ProductContainer>
    )
}