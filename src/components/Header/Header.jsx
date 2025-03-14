import './Header.css'
import Logo from '../../assets/logo.svg'

function Header() {
    return (
        <>
            <header>
                <div className='logo'><img src={Logo}/></div>
                <div className='d-flex hero'>
                    <div className='d-flex menu'>
                        <nav>
                            <ul className='d-flex'>
                                <li>home</li>
                                <li>projetos</li>
                                <li>sobre mim</li>
                                <li>contato</li>
                            </ul>
                        </nav>
                    </div>
                    <div className='d-flex container-title'>
                        <h1>front-end.web(developer)</h1>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header