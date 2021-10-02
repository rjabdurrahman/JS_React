import styled from '@emotion/styled'
import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function CoinDetails() {
    let [btc, setBtc] = useState({});
    let [eth, setEth] = useState({});
    let [bnb, setBnb] = useState({});

    useEffect(() => {
        axios.get('https://api.alternative.me/v2/ticker/bitcoin/')
            .then(res => {
                setBtc({...res.data.data[1].quotes.USD, percentage_change_24h: res.data.data[1].quotes.USD.percentage_change_24h.toFixed(2),  name: 'BTC'});
            })
            .catch(err => console.log(err))
        axios.get('https://api.alternative.me/v2/ticker/ethereum/')
            .then(res => {
                setEth({...res.data.data[1027].quotes.USD, percentage_change_24h: res.data.data[1027].quotes.USD.percentage_change_24h.toFixed(2), name: 'ETH'});
            })
            .catch(err => console.log(err))
        axios.get('https://api.alternative.me/v2/ticker/binancecoin/')
            .then(res => {
                setBnb({...res.data.data[1839].quotes.USD, percentage_change_24h: res.data.data[1839].quotes.USD.percentage_change_24h.toFixed(2), name: 'BNB'});
            })
            .catch(err => console.log(err))
    }, [])

    let Container = styled.div`
        display: flex;
        gap: 10px;
        >div {
            position: relative;
            height: 70px;
            width: 95px;
            background-color: #020b0f;
            border-radius: 12px;
            padding: 8px;
            box-sizing: border-box;
            h1, h3, h6 {
                margin: 0;
            }
            h1 {
                font-size: 18px;
            }
            h6 {
                position: absolute;
                top: 8px;
                right: 8px;
            }
        }
    `;
    return (
        <Container>
            {[btc, eth, bnb].map(coin => (
                <div key={coin.name}>
                    <h1>{coin.name}</h1>
                    <h3>${coin.price}</h3>
                    <h6 style={{color: coin.percentage_change_24h > 0 ? 'green' : 'red'}}>{coin.percentage_change_24h > 0 ? '+' : ''}{coin.percentage_change_24h}%</h6>
                </div>
            ))}
        </Container>
    )
}
