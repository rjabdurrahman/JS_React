import styled from '@emotion/styled';
import React from 'react'
import { useParams } from 'react-router'

export default function Category() {
    let { name: categroryName } = useParams();
    const Container = styled.div`
        h1 {
            margin: 0;
            padding: 10px 0;
            background-color: #ff5722;
            color: white;
            text-align: center;
        }
    `
    return (
        <Container>
            <h1>{categroryName.toUpperCase()}</h1>
        </Container>
    )
}
