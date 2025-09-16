import '../css/NavBar.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="nav-container">
            <div className="nav-logo">
                <Link to="/">
                    <img alt="logo" src="/logo.jpg" />
                </Link>
            </div>

            <div className="nav-categories">
                <Link to="/" className="nav-link">Inicio</Link>
                <Link to="/category/Libro Usado" className="nav-link">Libros usados</Link>
                <Link to="/category/Libro Nuevo" className="nav-link">Libros nuevos</Link>
                <Link to="/category/Novedades" className="nav-link">Novedades</Link>
            </div>

            <div className="nav-cart">
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;
