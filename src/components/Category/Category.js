import React from 'react'
import { useParams } from 'react-router'

export default function Category() {
    let { id: categroryId } = useParams();
    return (
        <div>
            <h1>Category: {categroryId}</h1>
            <h2>Products</h2>
        </div>
    )
}
