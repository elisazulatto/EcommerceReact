import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetail from './componentes/ItemDetail';

// Componente para página 404
const NotFound = () => {
  return (
    <div className="container mt-4">
      <div className="text-center">
        <h1>404 - Página no encontrada</h1>
        <p>La página que buscas no existe.</p>
        <a href="/" className="btn btn-primary">Volver al inicio</a>
      </div>
    </div>
  );
};

function App() {
  return (
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
          element={<ItemDetail />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </Router>
  );
}

export default App;
