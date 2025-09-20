import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ product, loading, error }) => {
    const { addToCart } = useCart();
    const [addedToCart, setAddedToCart] = useState(false);

    const handleAddToCart = (quantity) => {
        addToCart(product, quantity);
        setAddedToCart(true);
    };

    if (loading) {
        return (
            <div className="container mt-4">
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mt-4">
                <div className="alert alert-danger" role="alert">
                    <h4>Error</h4>
                    <p>{error}</p>
                    <Link to="/" className="btn btn-primary">
                        Volver al catálogo
                    </Link>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="container mt-4">
                <div className="alert alert-warning" role="alert">
                    <h4>Producto no encontrado</h4>
                    <p>El producto que buscas no existe o ha sido eliminado.</p>
                    <Link to="/" className="btn btn-primary">
                        Volver al catálogo
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={product.img}
                        className="img-fluid rounded"
                        alt={product.name}
                        style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                    />
                </div>
                <div className="col-md-6">
                    <h2>{product.name}</h2>
                    <p className="text-muted">Categoría: {product.categoria}</p>
                    <p className="lead">${product.precio}</p>
                    <p>{product.descripcion}</p>
                    <p><strong>Stock disponible:</strong> {product.stock} unidades</p>

                    <div className="mt-4">
                        {!addedToCart ? (
                            <ItemCount
                                stock={product.stock}
                                onAdd={handleAddToCart}
                            />
                        ) : (
                            <div className="alert alert-success">
                                <h5>¡Producto agregado al carrito!</h5>
                                <Link to="/cart" className="btn btn-primary">
                                    Ver carrito
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
