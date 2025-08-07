import '../css/NavBar.css';

const NavBar = () => {
    return (
        <nav className="nav-container">
            <img alt="logo" src="/logo.jpg" />
            <a href="#">Inicio</a>
            <a href="#">Productos</a>
            <a href="#">Contacto</a>
        </nav>
    )
}

export default NavBar;
