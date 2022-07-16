import logo from '../../assests/img/logo.svg'

function Header() {

    return (

        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvovido por
                    <a href="https://github.com/mikhailtrabalho">mikhailtrabalho@gmail.com</a>
                </p>
            </div>

        </header>
    )

}

export default Header