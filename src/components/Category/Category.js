import styled from '@emotion/styled';
import React from 'react'
import { useParams } from 'react-router'
import Products from '../Products/Products';
import TitleBar from '../TitleBar';

export default function Category() {
    let { name: categroryName } = useParams();
    
    return (
        <>
            <TitleBar title={categroryName}/>
            <Products />
        </>
    )
}
