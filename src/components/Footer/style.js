import styled from '@emotion/styled'

export const FooterContainer = styled.footer`
    background-color: teal;
    color: white;
    padding: 10px 20px;
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        list-style: none;
        padding: 0;
        margin: 0;
        li {
            font-size: 22px;
        }
    }
`