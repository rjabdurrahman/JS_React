import styled from '@emotion/styled'
import React from 'react'

export default function Categories() {
    const CetegoryContainer = styled.div`
        background-color: gray;
        color: white;
        >ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            font-size: 20px;
            font-weight: bold;
            gap: 10px;
            li {
                position: relative;
                padding: 8px 16px;
                cursor: pointer;
                >ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    position: absolute;
                    top: 42px;
                    background-color: red;
                    display: none;
                }
                &:hover ul{
                    display: block;
                }
            }
        }
    `
    const categories = [
        {
            category: 'Desktop',
            childs: []
        },
        {
            category: 'Laptop',
            childs: [
                { category: 'HP' },
                { category: 'DELL' },
                { category: 'ASUS' },
                { category: 'ACCER' }
            ]
        },
        {
            category: 'Component',
            childs: []
        },
        {
            category: 'Monitor',
            childs: [
                { category: 'HP' }
            ]
        },
        {
            category: 'UPS',
            childs: []
        },
        {
            category: 'Tablet',
            childs: []
        },
        {
            category: 'Mobile',
            childs: [
                { category: 'Walton' },
                { category: 'Samsung' },
                { category: 'Vivo' },
                { category: 'Realme' },
            ]
        }
    ];

    return (
        <CetegoryContainer>
            <ul>
                {categories.map(obj => (
                    <li>
                        <span>{obj.category} {obj.childs.length !== 0 && <b>&#8964;</b>}</span>
                        {obj.childs.length !== 0 && <ul>
                            {obj.childs.map(c => <li>{c.category}</li>)}
                        </ul>}
                    </li>
                ))}
            </ul>
        </CetegoryContainer>
    )
}
