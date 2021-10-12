import styled from '@emotion/styled'
import React from 'react'

export default function TitleBar({ title }) {
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
            <h1>{title.toUpperCase()}</h1>
        </Container>
    )
}
