import logo from '../../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="hhttps://github.com/mikhailtrabalho/dsmeta/commits"><u> mikhailtrabalho@gmail.com</u></a>
                </p>
            </div>
        </header>

    )
}

export default Header;