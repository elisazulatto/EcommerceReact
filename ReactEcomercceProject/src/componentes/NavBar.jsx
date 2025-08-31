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
                <a href="#" className="nav-link">Libros usados</a>
                <a href="#" className="nav-link">Libros nuevos</a>
                <a href="#" className="nav-link">Novedades</a>
            </div>

            <div className="nav-cart">
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;
