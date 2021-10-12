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
        padding: 0 8px 12px;
        > * {
            width: 100%;
        }
        button {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            justify-content: center;
            padding: 10px 16px;
            background: #3749BB;
            color: #fff;
            border: 0;
            text-align: center;
            border-radius: 12px;
            cursor: pointer;
            font-weight: bold;
        }
        >div {
            margin-left: -16px;
            img {
                width: 336px;
                height: 280px;
                border-radius: 10px;
            }
        }
        h4 {
            box-sizing: border-box;
            margin: 0;
            padding: 4px 8px;
            font-size: 20px;
        }
        h5 {
            box-sizing: border-box;
            margin: 8px 0;
            padding: 8px;
            line-height: 22px;
            font-size: 22px;
            font-weight: bold;
            color: #EF4A23;
            text-align: center;
            border-top: 1px solid #f0eeee;
        }
    `
    return (
        <ProductContainer>
            <div>
                <img src={productImg} alt={name} />
            </div>
            <h4>{name}</h4>
            <h5>${price}</h5>
            <button>
                <FaCartPlus size={18} />
                <span>Buy Now</span>
            </button>
        </ProductContainer>
    )
}