import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <header>
            <div className="brand-logo">
                <img src="https://hunnycoders.com/img/hunny%20coders.jpg" alt="HC"/>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/signup">SIGNUP</Link>
                    </li>
                    <li>
                        <Link to="/login">LOGIN</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}