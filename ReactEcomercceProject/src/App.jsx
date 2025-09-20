import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Cart from './componentes/Cart';
import CheckoutForm from './componentes/CheckoutForm';

const NotFound = () => {
  return (
    <div className="container mt-4">
      <div className="text-center">
        <h1>404 - Página no encontrada</h1>
        <p>La página que buscas no existe.</p>
        <Link to="/" className="btn btn-primary">Volver al inicio</Link>
      </div>
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="¡Bienvenidos a nuestra tienda!" />}
          />
          <Route
            path="/category/:category"
            element={<ItemListContainer greeting="Productos por categoría" />}
          />
          <Route
            path="/item/:id"
            element={<ItemDetailContainer />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
          <Route
            path="/checkout"
            element={<CheckoutForm />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
