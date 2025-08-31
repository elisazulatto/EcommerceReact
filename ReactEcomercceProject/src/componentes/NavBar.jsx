import '../css/NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="nav-container">
            <div className="nav-logo">
                <img alt="logo" src="/logo.jpg" />
            </div>

            <div className="nav-categories">
                <a href="#" className="nav-link">Inicio</a>
                <a href="#" className="nav-link">Preguntas frecuentes</a>
                <a href="#" className="nav-link">Envios</a>
                <a href="#" className="nav-link">Contacto</a>
            </div>

            <div className="nav-cart">
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;
