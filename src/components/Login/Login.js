import styled from "@emotion/styled"
import { useState } from "react"

export default function Login() {
    const LoginContainer = styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 20px;
        width: 400px;
        input {
            padding: 8px;
        }
        button {
            padding: 8px 16px;
        }
    `
    const [state, setState] = useState({});

    return (
        <>
            <h1>Login Page</h1>
            <form>
                <LoginContainer>
                    <input type="text" onChange={(e) => setState({...state, email: e.target.value})} value={state.email} placeholder="Email or Username" />
                    <input type="password" onChange={(e) => setState({...state, password: e.target.value})} value={state.password} placeholder="Password" />
                    <button>LOGIN</button>
                    {JSON.stringify(state)}
                </LoginContainer>
            </form>
        </>
    )
}