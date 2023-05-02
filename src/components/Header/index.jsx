import Logo from '../../assets/logo.svg'
import './header.scss'
import Navbar from '../Navbar'

export default function Header () {
    return (
        <header className='header'>
            <h1>
                <img src={Logo} alt="Kasa, location d'appartements"/>
            </h1>
            <Navbar />
        </header>
    )
}
